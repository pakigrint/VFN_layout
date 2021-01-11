document.getElementById("butplus").onclick = function () {
        location.href = "addnewcontact.html";
    };
document.getElementById("vfn").onclick = function () {
            location.href = "index.html";
        };


  for (var i=0; i<document.querySelectorAll(".contname").length; i++) {
      document.querySelectorAll(".contname")[i].onclick = function () {
              location.href = "profile.html";
          };
    };
