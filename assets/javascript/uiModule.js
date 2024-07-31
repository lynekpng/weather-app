export function updateWeatherUI(weatherData) {
    // A) Location and Date
    const date = new Date();
    const locationElement = document.querySelector('#location-and-date');
    locationElement.innerHTML = `
        ${Data.timezone}
        ${date.toDateString()}
    `;

    // B) Current Temperature
    const currentTempElement = document.getElementById('current-temperature');
    currentTempElement.innerHTML = `${weatherData.current.temp}°C<br>${weatherData.current.weather[0].description}`;

    // C) Current Stats
    const currentStatsElement = document.getElementById('current-stats');
    currentStatsElement.innerHTML = `
        High: ${weatherData.daily[0].temp.max}°C<br>
        Low: ${weatherData.daily[0].temp.min}°C<br>
        Wind: ${weatherData.current.wind_speed} m/s<br>
        Humidity: ${weatherData.current.humidity}%<br>
        Rain: ${weatherData.daily[0].pop * 100}%<br>
        Sunrise: ${new Date(weatherData.current.sunrise * 1000).toLocaleTimeString()}<br>
        Sunset: ${new Date(weatherData.current.sunset * 1000).toLocaleTimeString()}
    `;

    // D) Weather by Hour
    const weatherByHourElement = document.getElementById('weather-by-hour');
    weatherByHourElement.innerHTML = weatherData.hourly.slice(0, 6).map(hour => `
        <div>
            ${new Date(hour.dt * 1000).getHours()}:00<br>
            ${hour.temp}°C<br>
            ${hour.weather[0].description}
        </div>
    `).join('');

    // E) Next 5 Days
    const next5DaysElement = document.getElementById('next-5-days');
    next5DaysElement.innerHTML = weatherData.daily.slice(1, 6).map(day => `
        <div>
            ${new Date(day.dt * 1000).toDateString()}<br>
            ${day.temp.min}°C / ${day.temp.max}°C<br>
            ${day.weather[0].description}
        </div>
    `).join('');
}
