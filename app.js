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
});
