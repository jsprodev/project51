window.getPosts = () => {
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
    });
};

window.getUsers = () => {
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
              "<a href='#/users/" + oData.id + "'>" + oData.last_name + "</a>"
            );
          }
        }
      ]
    });
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
                                <th>Last Name</th>
                                </tr>
                            </thead>
                        </table>
                        <ul></ul>
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-3">
                <div class="col">
                    <button class="btn btn-sm btn-primary" id="getData3">
                        Get Something
                    </button>
                    <div class="card-layout mt-3" id="data3"></div>
                </div>
            </div>
        </div>
    `;
    return view;
  }
};

export default Home;
