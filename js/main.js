function arrow() {
    var a;
    a = document.getElementById("span");
    a.innerHTML = "&#xf25a;";
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
      }, 500);
    setTimeout(function () {
        a.innerHTML = "&#xf259;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
      }, 1500);
  }
