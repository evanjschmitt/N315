import { changePage } from "../model/model.js";
import { checkSignIn } from "../model/model.js";

function initListeners() {
  Swal.fire({
    title: "error",
    text: "Do you want to continue?",
    icon: "error",
    showCancelButton: "true",
  });
}

/// This function is used to grab the hash tag and load the correct page
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("route", pageID);
  changePage(pageID);
}

// This fucntion adds the url cchange listener to the window
function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  checkSignIn(initSite);
  // initSite();
});

