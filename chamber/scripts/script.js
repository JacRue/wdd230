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
    "Join the Chamber";
  banner.style.backgroundColor = "gold";
  banner.style.padding = "10px";
  banner.style.textAlign = "center";

  // Add to the Hero
  document.body.insertBefore(banner, document.body.firstChild);
}

const API_KEY = "7813090657fa5e84fb9ec1367a73911b";
const city = "Baytown";

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const weather = data.weather[0].description;

    const html = `<p>Temperature in ${city}: ${temperature}°C</p><p>Weather: ${weather}</p>`;

    document.querySelector("#weather").innerHTML = html;
  });
