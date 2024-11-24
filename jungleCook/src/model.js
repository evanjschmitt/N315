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
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User Created");

    })
    .catch((error) => {
      console.error("Signup Error:", error);
    });
}

export function signUserIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User Signed In");
      $(".loginOnly").css("display", "flex");
      $(".logoutOnly").css("display", "none");
    })
    .catch((error) => {
      console.error("Signup Error:", error);
    });
}
export function signUserOut() {
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
