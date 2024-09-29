// import Swal from "sweetalert2";

export function changePage(pageName) {
    console.log("pageName:", pageName);
    if (pageName == "") {
      // $("#app").html(`<h1>home</h1>`);
      $.get("pages/home.html", (data) => {
        $("#app").html(data);
      }).fail((error) => {
        console.log("error", error);
        Swal.fire({
          title: "Error: Page Not Found",
          text: "Please find a new page",
          icon: "error",
          timer: 2500,
        });
      });
    } else {
      // $("#app").html(`<h1>${pageName}</h1>`);
      $.get(`pages/${pageName}.html`, (data) => {
        $("#app").html(data);
      }).fail((error) => {
        console.log("error", error);
        Swal.fire({
          title: "Error: Page Not Found",
          text: "Please find a new page",
          timer: 2000,
        });
      });
    }
  }
  