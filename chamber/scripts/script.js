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

window.onload = function() {
  var today = new Date();
  var date = today.toDateString();
  document.getElementById("date").innerHTML = date;
};
