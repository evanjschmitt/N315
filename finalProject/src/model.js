// import * as $ from "jquery";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signOut,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
// } from "firebase/auth";
// import { app } from "./firebase.config.js";
// import Swal from "sweetalert2";

// const auth = getAuth(app);
// export let products = [];
// export let cart = [];

// //Sign in / out button display
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     $("#signIn").css("display", "none");
//     $("#signOut").css("display", "block");
//   } else {
//     $("#signIn").css("display", "block");
//     $("#signOut").css("display", "none");
//   }
// });

// //Load Products on Homepage
// export function loadHomePage() {
//   $.each(products, (index, product) => {
//     let productHTML = `
//       <div class="product">
//         ${
//           product.productBanner
//             ? `<div class="pbanner" style="background-color: ${product.productBannerColor};">${product.productBanner}</div>`
//             : ""
//         }
//       ${
//         product.isAd
//           ? ` <img src="assets/img/CM/${product.productImage}" alt="${product.productName}" />
//     </div>`
//           : ` <img src="assets/img/CM/${product.productImage}" alt="${
//               product.productName
//             }" />

//         <div class="productContent">
//           <div class="colors">
//             <!-- Assuming you may add dynamic color options here -->
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//           </div>

//           <p class="product-name">${product.productName}</p>

//           <div class="starterKit">
//             <div class="price">
//               <p>$${product.salePrice}</p>
//               <h5>$${product.productPrice}</h5>
//             </div>
//             <div class="deal">
//               <p>with Keurig® Starter Kit</p>
//             </div>
//           </div>

//           <div class="siteDeal">
//             <div class="price">
//               <p>$${product.starterKitPrice}</p>
//               <h5>$${product.productPrice}</h5>
//             </div>
//             <div class="deal">
//               <p>Site Deal: $70 Off</p>
//             </div>
//           </div>

//           <div class="rating">
//             <div class="star-rating">
//               ${generateStarRating(
//                 product.rating
//               )} <!-- Dynamically generate stars -->
//             </div>
//             <div class="ratingText">${product.rating} | (${
//               product.ratingCount
//             })</div>
//           </div>

//           <div class="shipping">
//             <span><i class="fa-solid fa-truck"></i><p>Free Shipping</p></span>
//           </div>

//           <div class="compare">
//             <div class="compareBox"></div>
//             <p class="compareText">Compare</p>
//           </div>

//           <div class="buy">BUY NOW</div>
//         </div>
//       </div>`
//       }
//        `;

//     $(".productList").append(productHTML);
//   });

//   // Function to dynamically generate star rating based on product rating
//   function generateStarRating(rating) {
//     const totalStars = 5;
//     let filledStars = Math.floor(rating); // Full stars
//     let halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half stars
//     let emptyStars = totalStars - filledStars - halfStars; // Empty stars

//     let starsHTML = "";

//     // Add full stars
//     for (let i = 0; i < filledStars; i++) {
//       starsHTML += '<i class="fa-solid fa-star"></i>';
//     }

//     // Add half star if necessary
//     if (halfStars) {
//       starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
//     }

//     // Add empty stars
//     for (let i = 0; i < emptyStars; i++) {
//       starsHTML += '<i class="fa-regular fa-star"></i>';
//     }

//     return starsHTML;
//   }

//   renderStars();
//   addBuyNowListener(); // Attach listeners after rendering
// }

// //Load Products in Cart
// function loadCart() {
//   $(".cartList").html(""); // Clear the cart container to avoid duplicate items

//   if (cart.length > 0) {
//     $.each(cart, (index, product) => {
//       let cartHtml = `
//               <div class="product">
//                 <img src="${product.productImage}" alt="placeholder" />
//                 <section class="desc">${product.productDesc}</section>
//                 <div data-index="${index}" class="remove">Remove From Cart</div>
//               </div>`;
//       $(".cartList").append(cartHtml);
//     });
//   } else {
//     $(".cartList").html(`<h2>Your Cart</h2>
//             <p>Your cart is empty!</p>`);
//   }

//   $(".remove").on("click", function () {
//     const indexToRemove = $(this).data("index");

//     Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to remove this item from your cart?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#27c75c",
//       confirmButtonText: "Yes, remove it!",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Remove item from cart
//         cart.splice(indexToRemove, 1);
//         $(".itemCount").html(cart.length);
//         loadCart();
//         Swal.fire({
//           title: "Removed!",
//           text: "Your item has been removed.",
//           icon: "success",
//           showConfirmButton: false,
//           timerProgressBar: true,
//           timer: 500,
//         });
//       }
//     });
//   });
// }

// export function loadProducts(callback) {
//   $.getJSON("data/data.json", (data) => {
//     products = data.PRODUCTS; // Store products
//     console.log("Loaded products:", products);
//     if (callback) callback(); // Invoke callback if provided
//   });
// }

// //Routing
// export function changeRoute() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#", "");

//   if (pageID) {
//     $.get(`pages/${pageID}.html`, (data) => {
//       $("#app").html(data);

//       if (pageID === "cart") {
//         loadCart();
//       }
//     });
//   } else {
//     // Default to homepage
//     $.get(`pages/home.html`, (data) => {
//       $("#app").html(data);
//       if (products.length === 0) {
//         loadProducts(loadHomePage);
//       } else {
//         loadHomePage();
//       }
//     });
//   }
// }

// function renderStars() {
//   const starContainer = document.querySelector(".star-rating");

//   if (starContainer) {
//     renderStarRating(starContainer, 4.2); // Set to 4.2 stars
//   } else {
//     console.error("Error: Star container not found!");
//   }

//   function renderStarRating(container, rating) {
//     container.innerHTML = ""; // Clear previous stars

//     const fullStars = Math.floor(rating); // Count of full yellow stars
//     const halfStar = rating % 1 >= 0.5; // Check if there should be a half-star
//     const totalStars = 5; // Total number of stars in the system

//     // Add full yellow stars
//     for (let i = 0; i < fullStars; i++) {
//       const star = document.createElement("span");
//       star.classList.add("star", "yellow");
//       star.innerHTML = "&#9733;"; // Unicode for a filled star
//       container.appendChild(star);
//     }

//     // Add a half star if needed
//     if (halfStar) {
//       const star = document.createElement("span");
//       star.classList.add("star", "yellow");
//       star.innerHTML = "&#9734;"; // Unicode for a hollow star
//       container.appendChild(star);
//     }

//     // Add gray stars to fill up to 5
//     for (let i = fullStars + (halfStar ? 1 : 0); i < totalStars; i++) {
//       const star = document.createElement("span");
//       star.classList.add("star");
//       star.innerHTML = "&#9734;"; // Unicode for a hollow star
//       container.appendChild(star);
//     }
//   }
// }

// function addBuyNowListener() {
//   $(".buy")
//     .off("click")
//     .on("click", function () {
//       let index = $(this).attr("id");
//       let selectedProduct = products[index];
//       cart.push(selectedProduct); // Push the entire product
//       $(".itemCount").html(cart.length); // Update cart count
//       // console.log("Added to cart:", selectedProduct);
//       Swal.fire({
//         title: "Added To Cart",
//         icon: "success",
//         timer: 1000,
//         showConfirmButton: false,
//         timerProgressBar: true,
//       });
//     });
// }

// export function initURLListener() {
//   $(window).on("hashchange", changeRoute);
//   changeRoute();
// }

// //Auth Functions
// export function signUserUp(fn, ln, email, password) {
//   Swal.fire({
//     title: "Sign Up Successful!",
//     text: "Thanks for signing up!",
//     icon: "success",
//     timer: 2000,
//     showConfirmButton: false,
//     timerProgressBar: true,
//   });
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const displayName = `${fn} ${ln}`;

//       // Update the user's profile with the name
//       return updateProfile(user, {
//         displayName: displayName,
//       });
//     })
//     .then(() => {
//       console.log("User created and name saved!");
//     })
//     .catch((error) => {
//       console.error("Signup Error:", error);
//     });
// }
// export function signUserIn(email, password) {
//   Swal.fire({
//     title: "Signing In...",
//     text: "Please wait while you log in.",
//     icon: "success",
//     timer: 2000,
//     showConfirmButton: false,
//     timerProgressBar: true,
//   });
//   signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       $(".loginOnly").css("display", "flex");
//       $(".logoutOnly").css("display", "none");
//     })
//     .catch((error) => {
//       console.error("Signup Error:", error);
//     });
// }
// export function signUserOut() {
//   Swal.fire({
//     title: "Bye!",
//     text: "Hope you had fun!",
//     icon: "success",
//     timer: 2000,
//     showConfirmButton: false,
//     timerProgressBar: true,
//   });
//   signOut(auth)
//     .then(() => {
//       $(".loginOnly").css("display", "none");
//       $(".logoutOnly").css("display", "flex");
//       // console.log("User Signed Out");
//     })
//     .catch((error) => {
//       console.error("Sign Out Error:", error);
//     });
// }

import * as $ from "jquery";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { app } from "./firebase.config.js";
import Swal from "sweetalert2";

const auth = getAuth(app);
export let products = [];
export let cart = [];

// Sign in / out button display
onAuthStateChanged(auth, (user) => {
  if (user) {
    $("#signIn").css("display", "none");
    $("#signOut").css("display", "block");
  } else {
    $("#signIn").css("display", "block");
    $("#signOut").css("display", "none");
  }
});

// Load Products on Homepage
export function loadHomePage() {
  $(".productList").html(""); // Clear the product list container before loading products

  $.each(products, (index, product) => {
    if (product.isAd) {
      let productHTML = `<div class="product">
          <img src="assets/img/CM/${product.productImage}" alt="${product.productName}"/> </div>`;
      $(".productList").append(productHTML);
    } else {
      let productHTML = `
      <div class="product">
        ${
          product.productBanner
            ? `<div class="pbanner" style="background-color: ${product.productBannerColor};">${product.productBanner}</div>`
            : ""
        }
        <img src="assets/img/CM/${product.productImage}" alt="${
        product.productName
      }" />
        <div class="productContent">
          <div class="colors">
            <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div>
          </div>
          <p class="product-name">${product.productName}</p>
          <div class="starterKit">
            <div class="price">
              <p>$${product.salePrice}</p>
              <h5>$${product.productPrice}</h5>
            </div>
            <div class="deal">
              <p>with Keurig® Starter Kit</p>
            </div>
          </div>
          <div class="siteDeal">
            <div class="price">
              <p>$${product.starterKitPrice}</p>
              <h5>$${product.productPrice}</h5>
            </div>
            <div class="deal">
              <p>Site Deal: $70 Off</p>
            </div>
          </div>
          <div class="rating">
            <div class="star-rating">
              ${generateStarRating(product.rating)}
            </div>
            <div class="ratingText">${product.rating} | (${
        product.ratingCount
      })</div>
          </div>
          <div class="shipping">
            <span><i class="fa-solid fa-truck"></i><p>Free Shipping</p></span>
          </div>
          <div class="compare">
            <div class="compareBox"></div>
            <p class="compareText">Compare</p>
          </div>
          <div class="buy" data-index="${index}">BUY NOW</div>
        </div>
      </div>
    `;
      $(".productList").append(productHTML);
    }
  });

  addBuyNowListener(); // Attach listeners after rendering products
}

// Load Products in Cart
function loadCart() {
  $(".cartList").html(""); // Clear the cart container to avoid duplicate items

  if (cart.length > 0) {
    let cartHtml = ""; // Initialize a string to accumulate the HTML

    $.each(cart, (index, product) => {
        cartHtml += `
        <div class="product">
          <img src="assets/img/CM/${product.productImage}" alt="${
          product.productName
        }" />
          <div class="productContent">
            <div class="colors">
              <div class="color"></div>
              <div class="color"></div>
              <div class="color"></div>
            </div>
            <p class="product-name">${product.productName}</p>
            <div class="starterKit">
              <div class="price">
                <p>$${product.salePrice}</p>
                <h5>$${product.productPrice}</h5>
              </div>
              <div class="deal">
                <p>with Keurig® Starter Kit</p>
              </div>
            </div>
            <div class="siteDeal">
              <div class="price">
                <p>$${product.starterKitPrice}</p>
                <h5>$${product.productPrice}</h5>
              </div>
              <div class="deal">
                <p>Site Deal: $70 Off</p>
              </div>
            </div>
            <div class="rating">
              <div class="star-rating">
                ${generateStarRating(product.rating)}
              </div>
              <div class="ratingText">${product.rating} | (${
          product.ratingCount
        })</div>
            </div>
            <div class="shipping">
              <span><i class="fa-solid fa-truck"></i><p>Free Shipping</p></span>
            </div>
            <div class="compare">
              <div class="compareBox"></div>
              <p class="compareText">Compare</p>
            </div>
            <div class="buy" data-index="${index}">REMOVE</div>
          </div>
        </div>
      `;
      
    });

    $(".cartList").append(cartHtml); // Append all products at once
  } else {
    $(".cartList").html(`<p>Your cart is empty!</p>`);
  }

  addRemoveListener(); // Attach listener for remove button
}

// Function to dynamically generate star rating based on product rating
function generateStarRating(rating) {
  const totalStars = 5;
  let filledStars = Math.floor(rating); // Full stars
  let halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half stars
  let emptyStars = totalStars - filledStars - halfStars; // Empty stars

  let starsHTML = "";

  // Add full stars
  for (let i = 0; i < filledStars; i++) {
    starsHTML += '<i class="fa-solid fa-star"></i>';
  }

  // Add half star if necessary
  if (halfStars) {
    starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="fa-regular fa-star"></i>';
  }

  return starsHTML;
}

// Add Buy Now listener to products
function addBuyNowListener() {
  $(".buy").on("click", function () {
    let index = $(this).data("index");
    let selectedProduct = products[index];
    cart.push(selectedProduct); // Add selected product to the cart
    $(".itemCount").html(cart.length); // Update cart count
    Swal.fire({
      title: "Added To Cart",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  });
}

// Add Remove listener to cart products
function addRemoveListener() {
  $(".buy").on("click", function () {
    let index = $(this).data("index");
    cart.splice(index, 1); // Remove product from the cart
    $(".itemCount").html(cart.length); // Update cart count
    loadCart(); // Reload the cart to reflect changes
    Swal.fire({
      title: "Removed!",
      text: "Your item has been removed.",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 500,
    });
  });
}

// Load products from JSON file
export function loadProducts(callback) {
  $.getJSON("data/data.json", (data) => {
    products = data.PRODUCTS; // Store products
    console.log("Loaded products:", products);
    if (callback) callback(); // Invoke callback if provided
  });
}

// Routing
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
    $.get(`pages/home.html`, (data) => {
      $("#app").html(data);
      if (products.length === 0) {
        loadProducts(loadHomePage);
      } else {
        loadHomePage();
      }
    });
  }
}

export function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

// Auth Functions
export function signUserUp(fn, ln, email, password) {
  Swal.fire({
    title: "Sign Up Successful!",
    text: "Thanks for signing up!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const displayName = `${fn} ${ln}`;

      // Update the user's profile with the name
      return updateProfile(user, {
        displayName: displayName,
      });
    })
    .then(() => {
      console.log("User created and name saved!");
    })
    .catch((error) => {
      console.error("Signup Error:", error);
    });
}

export function signUserIn(email, password) {
  Swal.fire({
    title: "Signing In...",
    text: "Please wait while you log in.",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      $(".loginOnly").css("display", "flex");
      $(".logoutOnly").css("display", "none");
    })
    .catch((error) => {
      console.error("SignIn Error:", error);
    });
}

export function signUserOut() {
  Swal.fire({
    title: "Bye!",
    text: "Hope you had fun!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
  signOut(auth)
    .then(() => {
      $(".loginOnly").css("display", "none");
      $(".logoutOnly").css("display", "flex");
    })
    .catch((error) => {
      console.error("Sign Out Error:", error);
    });
}
