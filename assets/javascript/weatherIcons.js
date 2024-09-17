import { loadWeatherIcons, getWeatherIcons } from './weatherIconsLoader.js';

// Initialize weather icons
await loadWeatherIcons();

export function getWeatherIcon(weatherCode) {
    const weatherIcons = getWeatherIcons();

    
    if (!Object.keys(weatherIcons).length) {
        return 'assets/icons/weather-icons/clear.png';
    }

    for (let category in weatherIcons) {
        if (weatherIcons[category][weatherCode]) {
            return weatherIcons[category][weatherCode].icon;
        }
    }

    // Return a default icon if no match is found
    return 'assets/icons/weather-icons/clear.png';
}
