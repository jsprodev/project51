import Parser from "../services/URLparser.js";
import { showLoader, hideLoader } from "../services/loader.js";

let getUser = async id => {
  let userData;
  showLoader.show();
  await fetch("https://reqres.in/api/users?id=" + id)
    .then(res => {
      return res;
    })
    .then(json => {
      userData = json.json();
      hideLoader.hide();
    });
  return userData;
};

let UserDetails = {
  render: async () => {
    let request = Parser.parseRequestURL();
    let id = request.id;
    let data = await getUser(id);
    console.log(data);
    return `
            <div class="card mt-3">
              <img src="${data.data.avatar}" alt="John" style="width:100%">
              <h4 class="mt-3">${data.data.first_name} ${data.data.last_name}</h4>
              <div>
                <a href="mailto:${data.data.email}">Email</a> 
              </div>
            </div>
        `;
  }
};

// let hash = location.hash.slice(1);
// console.log(hash);
// let splittedURL = hash.split("/");
// console.log(splittedURL);

export default UserDetails;
