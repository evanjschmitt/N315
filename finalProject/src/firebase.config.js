import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Ve9CZDFrzp5Se1zdccK2h5ezjqVtVjU",
  authDomain: "n315-class.firebaseapp.com",
  projectId: "n315-class",
  storageBucket: "n315-class.firebasestorage.app",
  messagingSenderId: "248604181670",
  appId: "1:248604181670:web:2c2c769e2c98e57a1a6067",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);