
export function updateWeatherUI(weatherData) {
    import {icons} from ./assets/icons.weather-icons ;
    function formatFullDate(date) {
        const options = {
            weekday: 'long', // "Monday"
            day: 'numeric',  //  "16"
            month: 'long',   // "September"
            year: 'numeric'  // "2024"
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }
    // A) Location and Date
    const date = new Date();
    const locationElement = document.querySelector('#location-and-date');

    locationElement.innerHTML = `
        <div> ${weatherData.city.name}, ${weatherData.city.country}<br></div>
        <div>${formatFullDate(date)}</div>
    `;

    // B) Current Temperature
    const currentTempElement = document.getElementById('current-temperature');
    const currentWeather = weatherData.list[0]; // Access the first forecast entry
    currentTempElement.innerHTML = `
        ${Math.round(currentWeather.main.temp)}°C<br>
        ${currentWeather.weather[0].description}
    `;

    // C) Current Stats
    const currentStatsElement = document.getElementById('current-stats');
    currentStatsElement.innerHTML = `
        High: ${Math.round(currentWeather.main.temp_max)}°C<br>
        Low: ${Math.round(currentWeather.main.temp_min)}°C<br>
        Wind: ${currentWeather.wind.speed} m/s<br>
        Humidity: ${currentWeather.main.humidity}%<br>
        Rain Probability: ${currentWeather.pop * 100 || 0}%<br>
        Sunrise: ${new Date(weatherData.city.sunrise * 1000).toLocaleTimeString()}<br>
        Sunset: ${new Date(weatherData.city.sunset * 1000).toLocaleTimeString()}
    `;

    // D) Weather by Hour
    const weatherByHourElement = document.getElementById('weather-by-hour');
    weatherByHourElement.innerHTML = weatherData.list.slice(0, 6).map(hour => `
        <div>
            ${new Date(hour.dt * 1000).getHours()}:00<br>
            ${Math.round(hour.main.temp)}°C<br>
            ${hour.weather[0].description}
        </div>
    `).join('');

    // E) Next 5 Days
    const next5DaysElement = document.getElementById('next-5-days');
    next5DaysElement.innerHTML = weatherData.list.slice(0, 5).map(day => `
        <div>
            ${new Date(day.dt * 1000).toDateString()}<br>
            Min: ${Math.round(day.main.temp_min)}°C<br>
            Max: ${Math.round(day.main.temp_max)}°C<br>
            ${day.weather[0].description}
        </div>
    `).join('');
}



