import * as $ from "jquery";
import {
  initURLListener,
  signUserIn,
  signUserOut,
  signUserUp,
} from "./model.js";

function initListeners() {
  //Sign In / Out / Up Functionality
  $(document).on("click", "#submit", (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    const firstName = $("#fName").val();
    const lastName = $("#lName").val();
    const email = $("#email").val();
    const password = $("#password").val();
    console.log(firstName, lastName, email, password);
    signUserUp(firstName, lastName, email, password);
    $("#fName").val("");
    $("#lName").val("");
    $("#email").val("");
    $("#password").val("");
  });
  $(document).on("click", "#signOut", (event) => {
    signUserOut();
    closeNav();
  });
  $(document).on("click", "#signIn", (event) => {
    const siEmail = $("#siEmail").val();
    const siPassword = $("#siPassword").val();
    signUserIn(siEmail, siPassword);
    $("#siEmail").val("");
    $("#siPassword").val("");
  });
}

const hamburgerMenu = document.querySelector(".hamburger-menu"); //JS Way
const nav = document.querySelector(".navLinks");
function initNavListeners() {
  // Account Listener
  $(".account").on("click", function () {
    window.location.hash = "account";
    closeNav();
  });

  // Cart Listener
  $(".cart").on("click", function () {
    window.location.hash = "cart";
    closeNav();
  });

  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  $("nav a").on("click", function (e) {
    closeNav();
  });
}
function closeNav() {
  if (nav.classList.contains("active")) {
    nav.classList.toggle("active");
  }
}



$(document).ready(function () {
  initURLListener();
  initNavListeners();
  initListeners();
});
