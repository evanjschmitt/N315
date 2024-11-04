function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log("Current pageID:", pageID); // Debugging log

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      // console.log("data:", data);
      $("#app").html(data);
    }).fail(function () {
      console.error(`Failed to load ${pageID}.html`);
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      // console.log("data:", data);
      $("#app").html(data);
    }).fail(function () {
      console.error("Failed to load home.html");
    });
  }

  //CHANGE BG TO YELLOW ON LOGIN
  if (pageID === "login") {
    console.log("On Login Page");
    document.querySelector(".background").classList.add("yellow");
  } else {
    document.querySelector(".background").classList.remove("yellow");
  }
}
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
});

// const hamburgerMenu = $('hamburger-menu'); //Jquery Way
const hamburgerMenu = document.querySelector(".hamburger-menu"); //JS Way
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function initListeners() {
  $("nav a").on("click", function (e) {
    closeNav();
  });

  $(".clickContainer").on("click", function (e) {
    console.log("Clicked");
    closeNav();
  });
}

function closeNav() {
  nav.classList.toggle("active");
}
$(document).ready(function () {
  initListeners();
});
