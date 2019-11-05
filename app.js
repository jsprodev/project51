import navbar from "./views/navbar.js";
import footer from "./views/footer.js";
import home from "./views/home.js";
import parser from "./services/parser.js";

const navbarE = document.getElementById("navbar");
navbarE.innerHTML = navbar.render();

const footerE = document.getElementById("footer");
footerE.innerHTML = footer.render();

const contentE = document.getElementById("content");
contentE.innerHTML = home.render();

console.log(location.href);
console.log(location.href.split("/"));
let url = parser.parseRequestURL();
console.log(url);

// location.hash.slice(1).toLowerCase() || "/";

$(function() {
  function showLoader() {
    $(this)
      .siblings(".card-layout")
      .append('<div class="loader" style="display: none"></div>');

    $(".loader").show();
  }

  function hideLoader() {
    $(".loader").hide();
  }

  $("#getData2").on("click", function() {
    $("#dataTable")
      .css({ display: "table" })
      .DataTable({
        ajax: "https://reqres.in/api/users?page=2",
        columns: [
          { data: "id" },
          { data: "first_name" },
          {
            data: "last_name",
            fnCreatedCell: function(nTd, sData, oData, iRow, iCol) {
              console.log(
                nTd + " " + sData + " " + oData.id + " " + iRow + " " + iCol
              );
              $(nTd).html(
                "<a href='/users/" + oData.id + "'>" + oData.last_name + "</a>"
              );
            }
          }
        ]
      });
  });

  //   // let user = true;

  //   // let getData = new Promise((resolved, rejected) => {
  //   //   if (user) {
  //   //     const msg = "user found";
  //   //     resolved(msg);
  //   //   } else {
  //   //     const msg = new Error("no user");
  //   //     rejected(msg);
  //   //   }
  //   // });

  //   // let functionReturningPromise = msg => {
  //   //   console.log(msg);
  //   //   let data = {
  //   //     id: 001,
  //   //     email: `user@example.com`,
  //   //     name: "John Doe",
  //   //     admin: true
  //   //   };
  //   //   return new Promise((resolved, rejected) => {
  //   //     if (data.admin) {
  //   //       resolved(data);
  //   //     } else {
  //   //       const msg = new Error("User is not admin, promise rejected");
  //   //       rejected(msg);
  //   //     }
  //   //   });
  //   // };

  //   // getData
  //   //   .then(functionReturningPromise)
  //   //   .then(resolved => {
  //   //     console.log(`User Data:
  //   //                     id: ${resolved.id},
  //   //                     name: ${resolved.name},
  //   //                     email: ${resolved.email}`);
  //   //   })
  //   //   .catch(rejected => {
  //   //     console.log(rejected);
  //   //   })
  //   //   .catch(rejected => {
  //   //     console.log(rejected);
  //   //   });
});
