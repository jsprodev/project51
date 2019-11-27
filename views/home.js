import { showLoader, hideLoader } from "../services/loader.js";

window.getPosts = () => {
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
    .css({ display: "table" })
    .DataTable({
      ajax: {
        url: "https://reqres.in/api/users?page=2",
        type: "GET"
        // beforeSend: function() {
        //   showLoader.show();
        // }
      },
      columns: [
        { data: "id" },
        {
          data: "first_name",
          fnCreatedCell: function(nTd, sData, oData, iRow, iCol) {
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
  console.log(await response.json());
};

let Home = {
  render: () => {
    let view = `
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <button class="btn btn-sm btn-primary" onclick="getPosts()">
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
        </div>
    `;
    return view;
  }
};

export default Home;
