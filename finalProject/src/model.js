import * as $ from "jquery";

export let products = [];
export let cart = [];

export function loadHomePage() {
  $("#app").html(""); // Clear the app content
  $.each(products, (index, product) => {
    let productHTML = `
      <div class="product">
      ${
        product.productBanner ? `<div class="pbanner" style="background-color: ${product.productBannerColor};>${product.productBanner}</div>` : ""
      }
        <img src="${product.productImage}" alt="placeholder" />
        <section class="desc">${product.productDesc}</section>
        <div id="${index}" class="buy">Buy Now!</div>
      </div>`;
    $("#app").append(productHTML);
  });
  addBuyNowListener(); // Attach listeners after rendering
}

export function loadProducts(callback) {
  $.getJSON("data/data.json", (data) => {
    products = data.PRODUCTS; // Store products
    console.log("Loaded products:", products);
    if (callback) callback(); // Invoke callback if provided
  });
}

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID) {
    $.get(`pages/${pageID}.html`, (data) => {
      $("#app").html(data);

      if (pageID === "cart") {
        loadCart();
      }
    });
  } else {
    // Default to homepage
    if (products.length === 0) {
      loadProducts(loadHomePage);
    } else {
      loadHomePage();
    }
  }
}

function loadCart() {
  $(".cartList").html(""); // Clear the cart container to avoid duplicate items

  if (cart.length > 0) {
    $.each(cart, (index, product) => {
      let cartHtml = `
              <div class="product">
                <img src="${product.productImage}" alt="placeholder" />
                <section class="desc">${product.productDesc}</section>
                <div data-index="${index}" class="remove">Remove From Cart</div>
              </div>`;
      $(".cartList").append(cartHtml);
    });
  } else {
    $(".cartList").html(`<h2>Your Cart</h2>
            <p>Your cart is empty!</p>`);
  }

  $(".remove").on("click", function () {
    let indexToRemove = $(this).data("index"); // Retrieve the index from the data attribute
    cart.splice(indexToRemove, 1); // Remove the item from the cart array
    $(".itemCount").html(cart.length); // Update cart count
    loadCart(); // Reload the cart to reflect changes
  });
}

function addBuyNowListener() {
  $(".buy")
    .off("click")
    .on("click", function () {
      let index = $(this).attr("id");
      let selectedProduct = products[index];
      cart.push(selectedProduct); // Push the entire product
      $(".itemCount").html(cart.length); // Update cart count
      console.log("Added to cart:", selectedProduct);
    });
}

export function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}
