import { fetchWeatherData } from './weatherModule.js';
import { updateWeatherUI } from './uiModule.js';

document.getElementById('search-button').addEventListener('click', () => {
    const locationInput = document.getElementById('location-input').value;
    if (locationInput) {
        fetchWeatherData(locationInput).then(weatherData => {
            updateWeatherUI(weatherData);
        });
    }
});

document.getElementById('location-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const locationInput = e.target.value;
        if (locationInput) {
            fetchWeatherData(locationInput).then(weatherData => {
                updateWeatherUI(weatherData);
            });
        }
    }
});
