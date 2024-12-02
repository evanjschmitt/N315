import * as $ from "jquery";

let products = [];
let cart= [];

function loadHomePage() {
  $("#app").html("");
  $.each(products, (index, product) => {
    let productHTML = `<div class="product">
    <img src="${product.productImage}" alt="placeholder" />
    <section class="desc"> ${product.productDesc}
    </section>
    <div id=${index} class="buy">Buy Now!</div>
  </div>`;
  console.log(productHTML);
  $("#app").append(productHTML);
  });
}

function loadProducts() {
  $.getJSON("data/data.json", (data) => {
    products = data.PRODUCTS;
    console.log(products);
  });
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);

        if (pageID == "cart") {
            if(cart.length > 0) {
                $.each(cart, (index, product) => {
                    let cartHtml = `<div class="product">
                    <img src="${product.productImage}" alt="placeholder" />
                    <section class="desc"> ${product.productDesc}
                    </section>
                    <div id=${index} class="buy">Buy Now!</div>
                  </div>`;
                  console.log(cartHtml);
                  $("#app").append(cartHtml);
                })
            }
        }



    });
  }
    else {
        if (products.length <= 0) {
            loadProducts();
        } else {
            loadHomePage();
        }
    $.get(`pages/home.html`, function (data) {
      $("#app").html(data);
    });
  }
}

function addBuyNowListener() {
    $(".buy").on("click", function() {
        let index = $(this).attr("id");
        cart.push(index);
        $(".cartList").html(cart.length);
        console.log(index);
    })
}

export function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}
