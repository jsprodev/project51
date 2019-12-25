import {
  showLoader,
  hideLoader
} from "../services/loader.js";

const getPosts = () => {
  showLoader.show();
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => {
      return response.json();
    })
    .then(json => {
      json.forEach(v => {
        const ul = document.querySelector("#data1 > ul");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(v.title));
        li.setAttribute("data-posts-id", v.id);
        ul.appendChild(li);
      });
      hideLoader.hide();
    });
};

window.getUsers = () => {
  $("#dataTable")
    .css({
      display: "table"
    })
    .DataTable({
      ajax: {
        url: "https://reqres.in/api/users?page=2",
        type: "GET"
        // beforeSend: function() {
        //   showLoader.show();
        // }
      },
      columns: [{
          data: "id"
        },
        {
          data: "first_name",
          fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
            $(nTd).html(
              "<a href='#/users/" + oData.id + "'>" + oData.first_name + "</a>"
            );
          }
        }
      ]
    });
};

window.postData = async () => {
  let form = document.querySelector("#submitUserForm");
  const formData = new FormData(form);
  let response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: formData,
    mode: "cors",
    headers: {
      "Content-Type": "multipart/form-data"
      // "Content-Type": "application/x-www-form-urlencoded",
      // "Content-Type": "application/json"
    }
  });

  if (await response.status === 201) {
    alert('hi');
  }
  // console.log(await response.status);
};

let Home = {
  registerEvents: () => {
    document.querySelector('#getPosts').onclick = getPosts;
  },
  render: () => {
    let view = `
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <button class="btn btn-sm btn-primary" id="getPosts">
                        Get Posts
                    </button>
                    <div class="card-layout mt-3" id="data1">
                        <ul></ul>
                    </div>
                </div>
                <div class="col">
                    <button class="btn btn-sm btn-primary" onclick="getUsers()">
                        Get Users
                    </button>
                    <div class="card-layout mt-3" id="data2">
                        <table id="dataTable" class="table table-striped table-bordered" style="display:none">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                </tr>
                            </thead>
                        </table>
                        <ul></ul>
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-3">
                <div class="col">
                    <div class="card-layout mt-3" id="data3">
                      <form id="submitUserForm">
                        <div class="form-row">
                          <div class="form-group col-md-6">
                              <label for="userName">Name</label>
                              <input type="text" class="form-control" name="name"  placeholder="Name">
                          </div>
                          <div class="form-group col-md-6">
                                <label for="userJob">Job</label>
                                <input type="text" class="form-control" name="job" placeholder="Job">
                          </div>
                          <div class="form-group col-md-6">
                            <a class="btn btn-primary btn-sm" id="submitBtn" onclick="postData()" >Submit</a>
                          </div>
                        </div>
                      </form>
                  </div>
                </div>
            </div>
            
            <div class="toast__cell">
            <div class="toast toast--green">
              <div class="toast__icon">
                <svg version="1.1" class="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
                  </g></g>
                </svg>
              </div>
              <div class="toast__content">
                <p class="toast__type">Success</p>
                <p class="toast__message">Anyone with access can view your invited visitors.</p>
              </div>
              <div class="toast__close">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
              <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
            </svg>
              </div>
            </div>
            
            </div>


        </div>
    `;
    return view;
  }
};


// const home = () => {
// let template = ``;

// registerEvents();
// return template;
// };

export default Home;