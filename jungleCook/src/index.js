import * as $ from "jquery";
import { signUserIn, signUserOut, signUserUp, getData } from "./model";
import Swal from "sweetalert2";

//Recipie Form Functions
const userRecipies = [];

function initRecipieListeners() {
  // console.log("Listener HI");

  $("#ingredBtn").on("click", function () {
    // console.log("Button Clicked :)");
    let ingredCount = $(".ingredients input").length;
    ingredCount++;
    $(".ingredients").append(
      `<input type="text" id="ingredient0${ingredCount}" placeholder="Ingredient ${ingredCount}"/>`
    );
  });
  $("#stepBtn").on("click", function () {
    let stepCount = $(".steps input").length;
    stepCount++;
    $(".steps").append(
      `<input type="text" id="step0${stepCount}" placeholder="Step ${stepCount}"/>`
    );
  });

  //Recipe Submission Listener
  $(".submitBtn").on("click", function () {
    Swal.fire({
      title: "Recipe Submitted!",
      text: "Time to check it out!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
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
    console.log(userRecipies);
  });
}
function removeRecipieListeners() {
  // console.log("Listener BYE");
  $("#ingredBtn").off("click");
  $("#stepBtn").off("click");
  $(".submitBtn").off("click");
}

//Routing
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  // Check if there's a page ID and load the page content
  if (pageID != "") {
    $.get(`pages//${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);

      if (pageID === "recipieForm") {
        initRecipieListeners();
      } else if (pageID === "showAllRecipies") {
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
        $("#recipieList").append(recipieCode); // Append recipieCode, not userRecipies
        removeRecipieListeners();
      } else {
        removeRecipieListeners();
      }
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      $("#app").html(data);
    }).fail(function () {
      console.error("Failed to load home.html");
    });
  }

  // CHANGE BACKGROUND BASED ON PAGE ID
  const background = document.querySelector(".background");

  // Start the switch statement
  switch (pageID) {
    case "login":
      // Set the yellow background color with transparency for login page
      background.classList.remove("hero-background", "recListBG");
      background.style.backgroundImage = "none"; // Ensure background image is removed
      background.classList.add("login-overlay"); // Add class to apply yellow overlay
      break;

    case "showAllRecipies":
      // Set a green background color with recipe-hero.jpg image for showAllRecipies page
      background.classList.remove("hero-background", "recListBG");
      background.style.backgroundImage =
        "url('./assets/images/recipe-hero.jpg')";
      background.classList.add("recListBG"); // Add green overlay class
      break;
    case "userRecipes":
      // Set a green background color with recipe-hero.jpg image for showAllRecipies page
      background.classList.remove("hero-background", "recListBG");
      background.style.backgroundImage =
        "url('./assets/images/recipe-hero.jpg')";
      background.classList.add("recListBG"); // Add green overlay class
      break;

    case "home":
      // Set a red background color with hero.jpg image for home page
      background.classList.remove(
        "hero-background",
        "recListBG",
        "login-overlay"
      );
      background.style.backgroundImage = "url('./assets/images/hero.jpg')";
      background.classList.add("hero-background");
      break;

    case "":
      background.classList.remove(
        "hero-background",
        "recListBG",
        "login-overlay"
      );
      background.style.backgroundImage = "url('./assets/images/hero.jpg')";
      background.classList.add("hero-background");
      break;
    default:
      background.classList.remove(
        "hero-background",
        "recListBG",
        "login-overlay"
      );
      background.style.backgroundImage = "none";
      break;
  }
}
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function closeNav() {
  nav.classList.toggle("active");
}

//Hamburger Menu Listener
const hamburgerMenu = document.querySelector(".hamburger-menu"); //JS Way
const nav = document.querySelector(".nav");
hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});


//Display Image on Recipe Form
window.displayImage = function () {
  const input = document.getElementById("imageURL");
  const img = document.getElementById("coverImg");

  // Check if a file was selected
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
      img.style.display = "block";
    };

    reader.readAsDataURL(input.files[0]);
  }
};

//Other Listeners
function initListeners() {
  // Nav Listeners
  $("nav a").on("click", function (e) {
    closeNav();
  });
  $(".clickContainer").on("click", function (e) {
    // console.log("Clicked");
    closeNav();
  });

  // Sign In/Out Listeners
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


}

$(document).ready(function () {
  initURLListener();
  initListeners();
  const checkUserRecipes = setInterval(() => {
    if ($(".userRecipes").length > 0) {
      clearInterval(checkUserRecipes); // Stop checking
      getData(); // Now safe to call
    }
  }, 100); // Check every 100ms
});
