//Imports
import * as $ from "jquery";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebaseConfig";

//Global Consts
const auth = getAuth(app);

//Signup Function
export function signUserUp(fn, ln, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User Created");
    })
    .catch((error) => {
      console.error("Signup Error:", error);
    });
  //   console.log("model.js:", fn, ln, email, password);
}

export function signUserIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("User Signed In");
      $("#yourRecipies").css("display", "block")
    })
    .catch((error) => {
      console.error("Signup Error:", error);
    });
}
export function signUserOut() {
  signOut(auth)
    .then(() => {
      console.log("User Signed Out");
      $("#yourRecipies").css("display", "none")
    })
    .catch((error) => {
      console.error("Sign Out Error:", error);
    });
}
