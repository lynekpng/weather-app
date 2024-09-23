import { getWeatherIcon } from "./weatherIcons.js";
export function updateWeatherUI(weatherData) {
  function formatFullDate(date) {
    const options = {
      weekday: "long", // "Monday"
      day: "numeric", //  "16"
      month: "long", // "September"
      year: "numeric", // "2024"
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  }

  // A) Location and Date
  const date = new Date();
  const locationElement = document.querySelector("#location-and-date");

  locationElement.innerHTML = `
        <div> ${weatherData.city.name}, ${weatherData.city.country}<br></div>
        <div>${formatFullDate(date)}</div>
    `;

  // B) Current Temperature
  const currentTempElement = document.getElementById("current-temperature");
  const currentWeather = weatherData.list[0];
  const weatherCode = currentWeather.weather[0].id;
  const weatherIcon = getWeatherIcon(weatherCode);
  currentTempElement.innerHTML = `
        ${Math.round(currentWeather.main.temp)}°C<br>
        ${currentWeather.weather[0].description} <br>
      <span> <img src="${weatherIcon}" alt="${
    currentWeather.weather[0].description
  }" class="weather-icon">
    `;

  // C) Current Stats
  const currentStatsElement = document.getElementById("current-stats");
  currentStatsElement.innerHTML = `
       <span> <img class ="utility-icon"src="../assets/icons/arrow-up.png"> Highest temperature: ${Math.round(
         currentWeather.main.temp_max
       )}°C<br></span>
       <span> <img class ="utility-icon"src="../assets/icons/arrow-down.png"> Lowest temperature: ${Math.round(
         currentWeather.main.temp_min
       )}°C<br></span>
        <span> <img class ="utility-icon"src="../assets/icons/weather-icons/wind.png"> Wind speed: ${
          currentWeather.wind.speed
        } m/s<br></span>

        <span> <img id="humidity" class ="utility-icon"src="../assets/icons/weather-icons/humidity.png"> Humidity: ${
          currentWeather.main.humidity
        }%<br></span>

        <span> <img class ="utility-icon"src="../assets/icons/weather-icons/rain-probability.png"> Rain Probability: ${
          currentWeather.pop * 100 || 0
        }%<br></span>

        <span> <img class ="utility-icon"src="../assets/icons/weather-icons/sunrise.png"> Sunrise: ${new Date(
          weatherData.city.sunrise * 1000
        ).toLocaleTimeString()}<br></span>

        <span> <img class ="utility-icon"src="../assets/icons/weather-icons/sunset.png"> Sunset: ${new Date(
          weatherData.city.sunset * 1000
        ).toLocaleTimeString()}</span>

    `;

  // D) Weather by Hour
  const weatherByHourElement = document.getElementById("weather-by-hour");
  weatherByHourElement.innerHTML = weatherData.list
    .slice(0, 5)
    .map((hour) => {
      const hourlyWeatherCode = hour.weather[0].id;
      const hourlyWeatherIcon = getWeatherIcon(hourlyWeatherCode);
      return `
      <div>
        ${new Date(hour.dt * 1000).getHours()}:00<br>
        ${Math.round(hour.main.temp)}°C<br>
        ${hour.weather[0].description}
        <span><img src="${hourlyWeatherIcon}" alt="${
        hour.weather[0].description
      }" class="weather-icon"></span>
      </div>
    `;
    })
    .join("");

  // E) Next 4 Days
  
  const next4DaysElement = document.getElementById("next-4-days");
  next4DaysElement.innerHTML = [8, 16, 24, 32]
    .map((index) => {
      const day = weatherData.list[index];
      const dailyWeatherCode = day.weather[0].id;
      const dailyWeatherIcon = getWeatherIcon(dailyWeatherCode);
  
      return `
        <div>
          ${new Date(day.dt * 1000).toDateString()}<br>
          Min: ${Math.round(day.main.temp_min)}°C<br>
          Max: ${Math.round(day.main.temp_max)}°C<br>
          ${day.weather[0].description}<br>
          <span><img src="${dailyWeatherIcon}" alt="${day.weather[0].description}" class="weather-icon"></span>
        </div>
      `;
    })
    .join("");
  
}
