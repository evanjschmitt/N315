import * as $ from "jquery";
import { signUserIn, signUserOut, signUserUp } from "./model";

//Recipie Form Functions
const userRecipies = [];
function initRecipieListeners() {
  console.log("Listener HI");

  $("#ingredBtn").on("click", function () {
    // console.log("Button Clicked :)");
    let ingredCount = $(".ingredients input").length;
    ingredCount++;
    $(".ingredients").append(
      `<input type="text" id="ingredient0${ingredCount}" placeholder="Ingredient ${ingredCount}"/>`
    );
  });
  $("#stepBtn").on("click", function () {
    // console.log("Button Clicked :D");
    let stepCount = $(".steps input").length;
    stepCount++;
    $(".steps").append(
      `<input type="text" id="step0${stepCount}" placeholder="Step ${stepCount}"/>`
    );
  });
  $(".submitBtn").on("click", function () {
    console.log("Button Clicked");
    let recipie = {
      recipieName: $("#recipieName").val(),
      imageURL: $("#imageURL").val(),
      ingredients: [],
      steps: [],
    };
    $(".ingredients input").each(function () {
      recipie.ingredients.push($(this).val());
    });
    $(".steps input").each(function () {
      recipie.steps.push($(this).val());
    });
    userRecipies.push(recipie);
    alert("Recipie Submitted!");
    console.log(userRecipies);
  });
}
function removeRecipieListeners() {
  console.log("Listener BYE");
  $("#ingredBtn").off("click");
  $("#stepBtn").off("click");
  $(".submitBtn").off("click");
}

//Routing
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages//${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      // console.log("data:", data);
      $("#app").html(data);
    }).fail(function () {
      console.error("Failed to load home.html");
    });
  }


//Recipe Form Listener Toggle
if (pageID == "recipieForm") {
  initRecipieListeners();
} else if (pageID == "showAllRecipies") {
  let recipieCode = "";
  $.each(userRecipies, function (index, recipie) {
    recipieCode += `<div class="recipie">
<div class="recipieImgHolder">
  <img src="${recipie.imageURL}" alt="${recipie.recipieName} image" />
</div>
<div class="recipieDesc">
  <h3>${recipie.recipieName}</h3>
  <p>Ingredients:</p>
  <ul>
    <li>Lorem, ipsum.</li>
    <li>Ea, atque?</li>
    <li>Illo, ex.</li>
    <li>Ad, nulla!</li>
  </ul>
  <p>Steps:</p>
  <ol>
    <li>Lorem ipsum dolor sit.</li>
    <li>Minima delectus voluptates tenetur.</li>
    <li>Autem aliquid quaerat facilis!</li>
    <li>Laudantium fuga at omnis.</li>
  </ol>
</div>
</div>`;
  });
  $("#recipieList").append(userRecipies);
  removeRecipieListeners();
} else {
  removeRecipieListeners();
}






  //CHANGE BG TO YELLOW ON LOGIN
  if (pageID === "login") {
    // console.log("On Login Page");
    document.querySelector(".background").classList.add("yellow");
  } else {
    document.querySelector(".background").classList.remove("yellow");
  }

  if (pageID === "showAllRecipies") {
    console.log("On Recipe Page");
    document.querySelector(".background").classList.add("recListBG");
  } else {
    document.querySelector(".background").classList.remove("recListBG");
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

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
  });

  $(document).on("click", "#signIn", (event) => {
    const siEmail = $("#siEmail").val();
    const siPassword = $("#siPassword").val();
    signUserIn(siEmail, siPassword);
    $("#siEmail").val("");
    $("#siPassword").val("");
  });

  console.log("init list");
}

function closeNav() {
  nav.classList.toggle("active");
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
