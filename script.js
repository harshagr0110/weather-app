const apiKey = '56a8243caba6f65de58bb00214bf70d9'; // Replace with your OpenWeatherMap API key
const city = 'London'; // Replace with the city you want the weather for

// Current weather URL
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// 5-Day / 3-Hour forecast URL
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

// Fetch both the current weather and 5-day forecast concurrently using Promise.all
Promise.all([fetch(currentWeatherUrl), fetch(forecastUrl)])
  .then(async (responses) => {
    // Wait for both responses to resolve
    const currentWeatherData = await responses[0].json();
    const forecastData = await responses[1].json();

    // Display current weather
    console.log(`Current Weather for ${city}:`);
    console.log(`Temperature: ${currentWeatherData.main.temp}°C`);
    console.log(`Weather: ${currentWeatherData.weather[0].description}`);
    console.log(`Humidity: ${currentWeatherData.main.humidity}%`);

    // Display 5-Day / 3-Hour forecast
    console.log(`\n5-Day / 3-Hour Weather Forecast for ${city}:`);
    forecastData.list.forEach((forecast, index) => {
      const date = new Date(forecast.dt * 1000); // Convert Unix timestamp to JavaScript date
      const temp = forecast.main.temp;
      const description = forecast.weather[0].description;
      console.log(`${date.toLocaleString()} - Temperature: ${temp}°C, Weather: ${description}`);
    });
  })
  .catch(error => console.error('Error fetching weather data:', error));
