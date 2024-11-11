import * as $ from "jquery";

function initRecipieListeners() {
    console.log("Listener HI")
  const userRecipies = [];
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
    console.log("Listener BYE")
  $("#ingredBtn").off("click");
  $("#stepBtn").off("click");
  $(".submitBtn").off("click");
}

// $(document).ready(function () {});

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages//${pageID}/${pageID}.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
      if (pageID == "recipieForm") {
        initRecipieListeners();
      } else {
        removeRecipieListeners();
      }
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      //   console.log("data " + data);
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
//   initListeners();
  initURLListener();
});
