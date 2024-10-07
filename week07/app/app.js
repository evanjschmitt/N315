import { userSignedIn, signIn, signOut, addToCart, getBooks } from "../model/model.js";

// function changeRoute() {
// let hashTag = window.location.hash;
//  let pageID = hashTag.replace('#', '');
// //   console.log(hashTag + ' ' + pageID);
// if (pageID != '') {
// $.get(`pages/pageID.html`, function (data) {
//  console.log('data ' + data);
//  $('#app').html(data);
// });
// } else {
// $.get(`pages/home.html`, function (data) {
// // console.log("data " + data);
//  $('#app').html(data);
// });
// }
// }

// function initURLListener() {
// $(window).on('hashchange', changeRoute);
// changeRoute();
// }

$(".links a").on("click", function (e) {
  e.preventDefault();
  var url = $(this).attr("href").replace("#", "");
  console.log(url);
});
$(".signInOut a").on("click", function (e) {
  e.preventDefault();
  var url = $(this).attr("href").replace("#", "");
  console.log(url);

  switch (url) {
    case "signIn":
      console.log(signIn());
      break;

    case "signOut":
      console.log(signOut());
      break;

    case "cart":
      if (userSignedIn) {
        alert("User is signed in, redirecting to cart page...");
      } else {
        alert("Please sign in first :)");
      }
      //CART FUNCTION GOES HERE
      break;
  }
});

$(".product span").on("click", function (e) {
    e.preventDefault();
    // var btnID = $(this).attr("id");
    var btnID = e.currentTarget.id;
    console.log(btnID);
    addToCart();
})

function initListeners() {}

function loadBooks() {
    let books= getBooks();
    // let homeBookCount = 3;
    // let index = 0;
    $.each(books, function (index, book) {
        if (book.featured)
        $("#app").append(
           ` <div class="product">
            <h4>${book.name}</h4>
            <span id="p${book.id}">Buy Now!</span>
            <p>$${book.price}</p>
        </div>`
        )
    })
}

$(document).ready(function () {
  // initURLListener();
  loadBooks();
  initListeners();
});
