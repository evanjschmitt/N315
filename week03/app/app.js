import { fname, getAllNames, getName } from "../model/model.js";
import * as MODEL from "../model/model.js";
function listAllNames() {
  // getAllNames();
}

function initListeners() {
  //   console.log("ready",fname);
  //   console.log("name:", getName())
  //   listAllNames();

  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    MODEL.changePage(btnID);
  });
}

$(document).ready(function () {
  MODEL.changePage("home");
  initListeners();
});
