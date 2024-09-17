import { fetchWeatherData } from './weatherModule.js';
import { updateWeatherUI } from './uiModule.js';
import { darkMode } from './dark-mode.js';
import { loadWeatherIcons } from './weatherIconsLoader.js';

document.addEventListener("DOMContentLoaded", async () => {
    await loadWeatherIcons() ;
    darkMode(); 
 
     
 });
 
 document.getElementById('search-button').addEventListener('click', () => {
    const locationInput = document.getElementById('location-input').value;
    if (locationInput) {
        fetchWeatherData(locationInput).then(weatherData => {
            if (weatherData) {
                updateWeatherUI(weatherData);
            } else {
                console.error('No weather data to display');
            }
        }).catch(error => {
            console.error('Error fetching weather data:', error);
        });
    }
});



document.getElementById('location-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const locationInput = e.target.value;
        if (locationInput) {
           
            fetchWeatherData(locationInput).then(weatherData => {
                if (weatherData) {
                    console.log('Weather data fetched:', weatherData); // Log the full object to the console
                    updateWeatherUI(weatherData); // Update the UI with the fetched data
                    localStorage.setItem('location', JSON.stringify(locationInput)); // Save location to localStorage
                } else {
                    console.error('No weather data to display'); // Handle case where data is null
                }
            }).catch(error => {
                console.error('Error fetching weather data:', error); // Log any errors
            });
            

        }}});

     


        