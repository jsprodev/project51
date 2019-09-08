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
  $("#getPosts").on("click", function() {
    $.ajax({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/",
      beforeSend: function() {
        $(".loader").show();
      }
    })
      .done(function(res) {
        $.each(res, function(i, v) {
          const li =
            "<li data-posts-id=" + res[i].id + ">" + res[i].title + "</li>";
          $("#posts > ul").append(li);
        });
        $(".loader").hide();
      })
      .fail(function(err) {
        console.log(err);
      })
      .always(function() {
        console.log("always fired");
      });
  });
  function showLoader() {}
});
