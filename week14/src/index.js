import * as $ from "jquery";
import { initURLListener } from "./model.js"





function initNavlistners() {
  //Account Listener
  $(".account").on("click", function () {
    window.location.hash = "account";
    console.log("Account Clicked");
  });
  //Cart Listener
  $(".cart").on("click", function () {
    window.location.hash = "cart";
    console.log("Cart Clicked (you capitalist)");
  });
}


$(document).ready(function () {
  initURLListener();
  initNavlistners();
});
