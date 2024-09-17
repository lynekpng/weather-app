let weatherIcons = {};

export async function loadWeatherIcons() {
    try {
        const response = await fetch('/assets/json/weatherIcons.json');
        weatherIcons = await response.json();
        return weatherIcons;
    } catch (error) {
        console.error('Error loading JSON:', error);
        return {};
    }
}

export function getWeatherIcons() {
    return weatherIcons;
}
