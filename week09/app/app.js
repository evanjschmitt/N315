// const hamburgerMenu = $('hamburger-menu'); //Jquery Way
const hamburgerMenu = document.querySelector(".hamburger-menu"); //JS Way
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function initListeners() {
  $("nav a").on("click", function (e) {
    let id = e.currentTarget.id;
    console.log(id)
    $("#app").html(id);
    closeNav();
  });

  $(".clickContainer").on("click", function(e){
    console.log("Clicked")
  closeNav();
  })

}

function closeNav() {
    nav.classList.toggle("active");
}
$(document).ready(function () {
  initListeners();
});
