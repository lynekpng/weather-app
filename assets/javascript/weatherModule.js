export async function fetchWeatherData(location) {
    const apiKey = 'dcddccfd62c84a0f33ae8c977aec839a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching weather data for ${location}: ${response.statusText}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}
