import * as $ from "jquery";
import { initURLListener } from "./model.js";

function initNavListeners() {
  // Account Listener
  $(".account").on("click", function () {
    window.location.hash = "account";
  });

  // Cart Listener
  $(".cart").on("click", function () {
    window.location.hash = "cart";
  });
}

$(document).ready(function () {
  initURLListener(); // Initialize URL routing
  initNavListeners(); // Initialize nav listeners
});
