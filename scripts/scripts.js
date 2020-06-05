function myFunction() {
    var x = document.querySelector(".toggle");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }