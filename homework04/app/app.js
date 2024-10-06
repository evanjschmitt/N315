import { changePage } from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log("route", pageID);
    changePage(pageID);
  }
  
  // This fucntion adds the url cchange listener to the window
  function initSite() {
    $(window).on("hashchange", route);
    route();
  }
  
  $(document).ready(function () {
   ;
    initSite();
  });

function initListeners() {
  $(".save").on("click", (e) => {
    $(".modal").css("display", "none");
  });

  //   $("#login").on("click", (e) => {
  //     openModal(`Thank you for <span>&nbsplogging&nbsp</span> in, ${userName}!`, false);
  //     console.log("Modal Opened");
  //   });
  $("#login").on("click", (e) => {
    openModal();
    // console.log("Modal Opened");
  });

  $(".submit").on("click", (e) => {
    $(".modal").css("display", "none");
    openModal(`<h2>Thanks for logging in!</h2>`, true);
    // console.log("Modal Opened");
  });

  $(".closeModal").on("click", (e) => {
    $(".modal").css("display", "none");
    // console.log("Modal Closed");
    window.location.reload() //FOR TESTING / DEMO PURPOSES
  });
//   console.log("listeners are inited");
}

function openModal(feedbackText, needSaveButton) {
  $(".feedback").html(feedbackText);
  if (!needSaveButton) {
    $(".save").css("display", "none");
  }
  $(".modal").css("display", "flex");
}


$(document).ready(function () {
  initListeners();
});
