var userName = "EvTheDev"

function initListeners() {
    $(".save").on("click", (e) => {
        $(".modal").css("display", "none");
        console.log("Save Clicked");
        console.log('This is where I steal your data :)')
      });


  $("#open").on("click", (e) => {
    openModal(`Thank you for <span>&nbsplogging&nbsp</span> in, ${userName}!`, false);
    console.log("Modal Opened");
  });

  $("#contact").on("click", (e) => {
    openModal(`Contact <span>&nbspUs&nbsp</span>!`, true);
    console.log("Modal Opened");
  });

  $(".closeModal").on("click", (e) => {
    $(".modal").css("display", "none");
    console.log("Modal Closed");
  });
  console.log("listeners are inited");
}

function openModal(feedbackText, needSaveButton) {
  $(".feedback").html(feedbackText);
  if (!needSaveButton) {
    $(".save").css("display", "none");
  }
  $(".modal").css("display", "flex");
}



$(window).on("load", function () {
  console.log("window is loaded");
  // $('.modal').css("display", "none")
});

$(document).ready(function () {
  initListeners();
});
