document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const city = document.getElementById('cityInput').value;
    const loaderOverlay = document.getElementById('loaderOverlay');
    const forecastSection = document.getElementById('forecastSection');
    const currentWeather = document.getElementById('currentWeather');
    const forecastContainer = document.getElementById('forecastContainer');
    const frontPageContent = document.getElementById('frontPageContent');
    const ranchiWeather = document.getElementById('city1Weather');
    const jamshedpurWeather = document.getElementById('city2Weather');
    const containerclass = document.getElementsByClassName('container');
    const popper = document.getElementById('tickerContainer');
    const funfactcontainer=document.getElementById('funFactContainer');

    loaderOverlay.style.display = 'flex';
    frontPageContent.style.display = 'none';
    ranchiWeather.style.display = 'none';
    jamshedpurWeather.style.display = 'none';
      popper.style.display = 'none';
     funfactcontainer.style.display='none';

    // Hide all elements with the class 'container'
    for (let i = 0; i < containerclass.length; i++) {
        containerclass[i].style.display = 'none';
    }

    const apiKey = '56a8243caba6f65de58bb00214bf70d9';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    setTimeout(() => {
        Promise.all([fetch(currentWeatherUrl), fetch(forecastUrl)])
            .then(async (responses) => {
                if (!responses[0].ok || !responses[1].ok) {
                    throw new Error('Error fetching weather data.');
                }

                
                const currentWeatherData = await responses[0].json();
                const forecastData = await responses[1].json();

                loaderOverlay.style.display = 'none';
                forecastSection.classList.remove('d-none');

                // Clear the content of the page
                currentWeather.innerHTML = '';
                forecastContainer.innerHTML = '';

                currentWeather.innerHTML = `
                <div class="forecast-card" style="font-family: 'Comic Sans MS', cursive, sans-serif;">
                  <h4 style="font-family:'algeria';">CURRENT WEATHER FOR ${city.toUpperCase()}, ${currentWeatherData.sys.country.toUpperCase()}</h4>
                  <p>TEMPERATURE: ${currentWeatherData.main.temp}°C</p>
                  <p>FEELS LIKE: ${currentWeatherData.main.feels_like}°C</p>
                  <p>WEATHER: ${currentWeatherData.weather[0].description.toUpperCase()}</p>
                  <p>HUMIDITY: ${currentWeatherData.main.humidity}%</p>
                  <p>SUNRISE: ${new Date(currentWeatherData.sys.sunrise * 1000).toLocaleString().toUpperCase()}</p>
                  <p>SUNSET: ${new Date(currentWeatherData.sys.sunset * 1000).toLocaleString().toUpperCase()}</p>
                  <p>LOCATION: ${currentWeatherData.name.toUpperCase()}, ${currentWeatherData.sys.country.toUpperCase()}</p>
                </div>
                `;

                forecastData.list.forEach((forecast, index) => {
                    if (index % 2 === 0) {
                        const date = new Date(forecast.dt * 1000);
                        const temp = forecast.main.temp;
                        const description = forecast.weather[0].description;
                        const card = document.createElement('div');
                        card.className = 'swiper-slide forecast-card';
                        card.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
                        card.style.width = '200px'; // Set width to make it square
                        card.style.height = '200px'; // Set height to make it square
                        card.style.display = 'flex';
                        card.style.flexDirection = 'column'; // Make content vertical
                        card.style.justifyContent = 'center';
                        card.style.alignItems = 'center';
                        card.innerHTML = `
                        <h5>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</h5>
                        <p>TEMP: ${temp} &deg;C</p>
                        <p>${description.toUpperCase()}</p>
                        `;
                        forecastContainer.appendChild(card);
                    }
                });

                // Initialize Swiper
                new Swiper('.swiper-container', {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            })
            .catch(error => {
                loaderOverlay.style.display = 'none';
                frontPageContent.style.display = 'block';
                ranchiWeather.style.display = 'block';
                jamshedpurWeather.style.display = 'block';
                for (let i = 0; i < containerclass.length; i++) {
                    containerclass[i].style.display = 'block';
                }
                alert(error.message);
            });
    }, 2222); // Run the loader for 3 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    const cities = ['Delhi', 'London'];
    const apiKey = '56a8243caba6f65de58bb00214bf70d9';

    // Function to fetch and display weather data
    function fetchWeather(city, cityIndex) {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                const cityNameElement = document.getElementById(`city${cityIndex + 1}Name`);
                const cityWeatherElement = document.getElementById(`city${cityIndex + 1}Weather`);
                const cityIconElement = document.getElementById(`city${cityIndex + 1}Icon`);
                const weatherDescription = data.weather[0].description.toLowerCase();
                let iconUrl;

                // Assign different icons based on weather description
                if (weatherDescription.includes('clear')) {
                    iconUrl = 'sun.png';
                } else if (weatherDescription.includes('clouds')) {
                    iconUrl = 'cloud.png';
                } else if (weatherDescription.includes('rain')) {
                    iconUrl = 'cloudy.png';
                } else if (weatherDescription.includes('snow')) {
                    iconUrl = 'snow.png';
                } else if (weatherDescription.includes('thunderstorm')) {
                    iconUrl = 'storm.png';
                } else if (weatherDescription.includes('fog')) {
                    iconUrl = 'fog.png';
                } else {
                    iconUrl = 'sun.png';
                }

                cityNameElement.textContent = `${city}, ${data.sys.country}`;
                cityWeatherElement.innerHTML = `
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Feels Like: ${data.main.feels_like}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleString()}</p>
                `;
                cityIconElement.src = iconUrl;
            })
            .catch(error => {
                alert(`Error fetching weather data for ${city}.`);
            });
    }

    // Fetch weather for default cities
    cities.forEach((city, index) => {
        fetchWeather(city, index);
    });

    // Handle showing modal and updating location
    });

