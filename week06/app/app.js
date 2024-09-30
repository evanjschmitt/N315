function initListeners() {
    console.log("listeners are inited");
}


$(window).on("load", function() {
    console.log('window is loaded');
})

$(document).ready(function () {
    initListeners();
});