const API_KEY = "7813090657fa5e84fb9ec1367a73911b";
const city = "Baytown";

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    let temperature = data.main.temp;
    temperature = ((temperature - 273.15) * 9) / 5 + 32;
    const windSpeed = data.wind.speed;

    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate the wind chill
      const windChill =
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temperature * Math.pow(windSpeed, 0.16);

      const weather = data.weather[0].description;

      document.querySelector("#weather").innerHTML = ` 
      <p>Temperature: ${temperature.toFixed(2)}°F</p>
        <p>Weather: ${weather}</p>
        <p>Wind speed: ${windSpeed.toFixed(2)} mph</p>
        <p>Wind chill: ${windChill.toFixed(2)}°F</p>
      `;
    } else {
      document.querySelector("#weather").innerHTML = ` 
      <p>Temperature: ${temperature.toFixed(1)}°F</p>
        <p>Wind speed: ${windSpeed.toFixed(2)} mph</p>
        <p>Wind chill: N/A</p>
      `;
    }
  });
  
