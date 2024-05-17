


export async function fetchWeatherData(location) {
    const apiKey = '0e41109390ce9feed1ce3d3d30924f92';
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris" ;
    const Response = await fetch(apiUrl + `&appid=${apiKey}`);
    const Data = await Response.json();
    console.log(Data) ;
    
    // if (Data.length > 0) {
    //     const { lat, lon } = Data[0];
    //     const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`);
    //     return await weatherResponse.json();
    // }
    // throw new Error('Location not found');
}
