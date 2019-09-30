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

  $("#getData1").on("click", function() {
    $.ajax({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/",
      beforeSend: function() {
        var lol = showLoader.bind(this);
        lol();
        console.log($(this));
      }
    })
      .done(function(res) {
        $.each(res, function(i, v) {
          const li = "<li data-posts-id=" + v.id + ">" + v.title + "</li>";
          $("#data1 > ul").append(li);
        });
      })
      .fail(function(err) {
        console.log(err);
      })
      .always(function() {
        // hideLoader();
      });
  });

  $("#getData2").on("click", function() {
    $("#dataTable")
      .css({ display: "table" })
      .DataTable({
        ajax: "https://reqres.in/api/users?page=2",
        columns: [{ data: "id" }, { data: "first_name" }, { data: "last_name" }]
      });
  });

  let user = true;

  let getData = new Promise((resolved, rejected) => {
    if (user) {
      const msg = "user found";
      resolved(msg);
    } else {
      const msg = new Error("no user");
      rejected(msg);
    }
  });

  let functionReturningPromise = msg => {
    console.log(msg);
    let data = {
      id: 001,
      email: `user@example.com`,
      name: "John Doe",
      admin: true
    };
    return new Promise((resolved, rejected) => {
      if (data.admin) {
        resolved(data);
      } else {
        const msg = new Error("User is not admin, promise rejected");
        rejected(msg);
      }
    });
  };

  getData
    .then(functionReturningPromise)
    .then(resolved => {
      console.log(`User Data: 
                      id: ${resolved.id},
                      name: ${resolved.name},
                      email: ${resolved.email}`);
    })
    .catch(rejected => {
      console.log(rejected);
    })
    .catch(rejected => {
      console.log(rejected);
    });
});
