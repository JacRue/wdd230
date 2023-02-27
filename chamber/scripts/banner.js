window.onload = function () {
  var today = new Date();
  var date = today.toDateString();
  document.getElementById("date").innerHTML = date;
};

var d = new Date();
var dayOfWeek = d.getDay();

// Check if today is Monday (1) or Tuesday (2)
if (dayOfWeek == 1 || dayOfWeek == 2) {
  // Create the banner element
  var banner = document.createElement("div");
  banner.innerHTML =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.style.backgroundColor = "gold";
  banner.style.padding = "10px";
  banner.style.textAlign = "center";

  // Add to the Hero
  //document.body.insertBefore(banner, document.body.firstChild);
}
