// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#wind-speed");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Baytown&units=imperial&appid=cde4215b9acd1fa49459c7f0ca207a86";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;

  windSpeed.innerHTML = `Wind Speed: ${weatherData.wind.speed} mph`;

  const windChill = document.querySelector("#wind-chill");
  const temperature = weatherData.main.temp;
  const windSpeedValue = weatherData.wind.speed;
  const windChillValue = calculateWindChill(temperature, windSpeedValue);
  windChill.innerHTML = `Wind Chill: ${windChillValue.toFixed(0)}&deg;F`;

  function calculateWindChill(temperature, windSpeed) {
    const windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
  }
  console.log(document.getElementById("weatherResults"));
  document.getElementById("weatherResults").innerHTML = html;
}

apiFetch();
