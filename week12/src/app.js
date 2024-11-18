import { getData, } from "./model.js";
import * as $ from "jquery";
import "./model.js";

function initListeners() {
    getData();
}

$(document).ready(function() {
    initListeners();
})