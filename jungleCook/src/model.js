//Imports
import * as $ from "jquery";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
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
    .then((userCredential) => {
      const user = userCredential.user;
      const displayName = `${fn} ${ln}`;

      // Update the user's profile with the name
      return updateProfile(user, {
        displayName: displayName,
      });
    })
    .then(() => {
      console.log("User created and name saved!");
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
    // console.log(data);

    const recipes = data.Recipes;

    // $(".userRecipes").empty();

    $.each(recipes, (idx, recipe) => {
      const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : [];
      const steps = Array.isArray(recipe.steps) ? recipe.steps : [];

      let recString = `
      <div class="allRecipies">
  <div class="recipieList">
        <div class="recipie">
          <div class="recipieImgHolder">
            <img src="${
              recipe.imageURL || "assets/images/car.jpg"
            }" alt="Recipe Image" />
          </div>
          <div class="recipieDesc">
            <h3 class="header">${recipe.name || "Not specified"}</h3>
            <p class="recDesc">${recipe.desc || "No description available"}</p>
            <span class="descCounter">
              <img src="./assets/images/time.svg" alt="Time to Cook" /> ${
                recipe.totalTime || "Not specified"
              }
            </span>
            <span class="descCounter">
              <img src="./assets/images/servings.svg" alt="Serving Size" /> ${
                recipe.servingSize || "Not specified"
              }
            </span>
      
          </div>
        </div>
        </div>
        </div>
      `;

      $(".userRecipes").append(recString);
    });
  }).fail(function () {
    $(".userRecipes").html("<p>Error: Could not load recipes.</p>");
  });
}
