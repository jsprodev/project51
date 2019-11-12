import Parser from "../services/URLparser.js";

let getUser = async id => {
  console.log("hello");
  let userData;
  await fetch("https://reqres.in/api/users?id=" + id)
    .then(res => {
      return res;
    })
    .then(json => {
      userData = json.json();
    });
  return userData;
};

let UserDetails = {
  render: async () => {
    let request = Parser.parseRequestURL();
    let id = request.id;
    let data = await getUser(id);
    return `
            <div>
                <ul>
                    <li>${data.data.id}</li>
                    <li>${data.data.first_name}</li>
                    <li>${data.data.last_name}</li>
                    <li>${data.data.email}</li>
                </ul>
            </div>
        `;
  }
};

// let hash = location.hash.slice(1);
// console.log(hash);
// let splittedURL = hash.split("/");
// console.log(splittedURL);

export default UserDetails;
