import * as $ from "jquery";
import "./model.js";

function changeRoute() {
let hashTag = window.location.hash;
 let pageID = hashTag.replace('#', '');
//   console.log(hashTag + ' ' + pageID);

if (pageID != '') {
$.get(`pages/${pageID}.html`, function (data) {
//  console.log('data ' + data);
 $('#app').html(data);
});
} else {
$.get(`pages/home.html`, function (data) {
// console.log('data ' + data);
 $('#app').html(data);
});
}
}

function initNavlistners() {
    //Account Listener
    $(".account").on("click", function() {
        console.log("Account Clicked");
    })
    //Cart Listener
    $(".cart").on("click", function() {
        console.log("Cart Clicked (you capitalist)")
    })
}


function initURLListener() {
$(window).on('hashchange', changeRoute);
changeRoute();
}

$(document).ready(function () {
initURLListener();
initNavlistners();
});