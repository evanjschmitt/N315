import * as $ from "jquery";
import { signUserUp, signUserOut, signUserIn } from "./model";

function initListeners() {
    $("#submit").on("click", () => {
        const firstName = $("#fName").val();
        const lastName = $("#lName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        // console.log(firstName, lastName, email, password);
        signUserUp(firstName, lastName, email, password)
    })

    $("#signOut").on("click", () => {
        signUserOut();
    })
    $("#signIn").on("click", () => {
        const siEmail = $("#siEmail").val();
        const siPassword = $("#siPassword").val();
        signUserIn(siEmail, siPassword);
    })

    console.log("init list");
}
 
$(document).ready(function () {
initListeners();
});