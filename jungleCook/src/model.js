//Imports
import * as $ from "jquery";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase.config.js";
import Swal from "sweetalert2";

//Global Consts
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    $("#yourRecipies").css("display", "block");
  } else {
    $("#yourRecipies").css("display", "none");
  }
});

//Signup Function
export function signUserUp(fn, ln, email, password) {
  Swal.fire({
    title: "Signup Successful!",
    text: "Thanks for signing up!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User Created");
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
      console.error("Signup Error:", error);
    });
}
export function signUserOut() {
  Swal.fire({
    title: "Bye!",
    text: "We hope you enjoyed your cooking!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
  signOut(auth)
    .then(() => {
      $(".loginOnly").css("display", "none");
      $(".logoutOnly").css("display", "flex");
      console.log("User Signed Out");
    })
    .catch((error) => {
      console.error("Sign Out Error:", error);
    });
}

export function getData() {
  $.getJSON("data/data.json", function (data) {
    console.log("Loaded data:", data); // Debug: Ensure data is loaded correctly

    // Access the 'Recipes' array
    const recipes = data.Recipes;

    if (!Array.isArray(recipes)) {
      console.error("Recipes is not an array:", recipes);
      return;
    }

    console.log("Recipes array:", recipes); // Debug: Log the array of recipes

    // Ensure the container exists
    if (!$(".userRecipes").length) {
      console.error("Container '.userRecipes' not found in the DOM.");
      return;
    }

    // Iterate over the 'Recipes' array
    $.each(recipes, (idx, recipe) => {
      console.log("Processing individual recipe:", recipe); // Debug individual recipe

      const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : [];
      const steps = Array.isArray(recipe.steps) ? recipe.steps : [];

      let recString = `
      <div class="recipie">
      <div class="recipieImgHolder">
        <img src="./assets/images/car.jpg" alt="This Is The Image" />
      </div>
      <div class="recipieDesc">
        <h3 class="header">${recipe.name || "Not specified"}</h3>
        <p class="recDesc">
         ${recipe.recipeDesc || "Not specified"}
        </p>
        <span class="descCounter">
          <img src="./assets/images/time.svg" alt="" /> ${
            recipe.totalTime || "Not specified"
          }
        </span>
        <span class="descCounter">
          <img src="./assets/images/servings.svg" alt="" /> ${
            recipe.servingSize || "Not specified"
          }
        </span>
        <h3>Ingredients:</h3>
          <ul>
            ${ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
          </ul>
          <h3>Steps:</h3>
          <ol>
            ${steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
      </div>
      `;

      console.log("Generated HTML for this recipe:", recString); // Debug HTML

      $(".userRecipes").append(recString); // Append to container
    });
  }).fail(function () {
    alert("Error: Could not load recipes.");
  });
}
