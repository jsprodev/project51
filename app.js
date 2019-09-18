// $(document).ready(function() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(res => res.json())
//     .then(json => {
//       $.each(json, function(i, v) {
//         const li = "<li>" + json[i].title + "</li>";
//         $("#data").append(li);
//       });
//       let jsonString = JSON.stringify(json);
//       let loli = JSON.parse(jsonString);
//       console.log(jsonString);
//       console.log(loli);
//     });
//   $.ajax({
//     method: "GET",
//     url: "https://jsonplaceholder.typicode.com/todos/",
//     beforeSend: function() {
//       console.log("Before Send Called 1");
//     },
//     success: function(res) {
//       console.log("Success Fired 1");
//       $.each(res, function(i, v) {
//         // console.log(v);
//         const li = "<li data-id='" + i + "'>" + v.title + "</li>";
//         $("#data").append(li);
//       });
//     },
//     error: function() {
//       console.log("Error Fired 1");
//     },
//     complete: function() {
//       console.log("Complete Fired 1");
//     }
//   });
// window.alert("stop");
// });

// document.getElementById("getData").addEventListener("click", function() {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("data").innerHTML = this.responseText;
//       console.log(this.responseText);
//     }
//   };
//   xhr.open("get", "https://jsonplaceholder.typicode.com/todos/", true);
//   xhr.send();
// });

// document.getElementById("getData2").addEventListener("click", function() {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("data2").innerHTML = this.responseText;
//       console.log(this.responseText);
//     }
//   };
//   xhr.open("get", "https://jsonplaceholder.typicode.com/albums/", true);
//   xhr.send();
// });
$(function() {
  function showLoader() {
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
        showLoader();
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
        hideLoader();
      });
  });

  $("#getData2").on("click", function() {
    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(json => {
        json.data.forEach(value => {
          const li =
            "<li data-item-id=" + value.id + ">" + value.first_name + "</li>";
          $("#data2 > ul").append(li);
        });
      });
  });
});
