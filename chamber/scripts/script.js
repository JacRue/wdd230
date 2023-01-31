let text = document.lastModified;
const date = new Date(document.lastModified);
document.getElementById("updated").innerHTML = date;

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }