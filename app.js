import Navbar from "./views/navbar.js";
import Footer from "./views/footer.js";
import Home from "./views/home.js";
import UserDetails from "./views/UserDetails.js";
import Error404 from "./views/Error404.js";
import Parser from "./services/URLparser.js";

const routes = {
  "/": Home,
  "/users/:id": UserDetails
};

let router = async () => {
  const navbarE = document.getElementById("navbar");
  navbarE.innerHTML = Navbar.render();

  const footerE = document.getElementById("footer");
  footerE.innerHTML = Footer.render();

  const contentE = document.getElementById("content");
  contentE.innerHTML = Home.render();

  // Get the parsed URl from the addressbar
  let request = Parser.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  contentE.innerHTML = await page.render();
  parsedURL === '/' ? page.registerEvents() : false;
  // await page.after_render();
};

// Listen on hash change:
window.addEventListener("hashchange", router);
// Listen on page load:
window.addEventListener("load", router);

// console.log(location);
// console.log(location.hash);
// let url = Parser.parseRequestURL();
// console.log(url);

// location.hash.slice(1).toLowerCase() || "/";

// $(function() {
//   function showLoader() {
//     $(this)
//       .siblings(".card-layout")
//       .append('<div class="loader" style="display: none"></div>');

//     $(".loader").show();
//   }

//   function hideLoader() {
//     $(".loader").hide();
//   }

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
// });