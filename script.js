document.addEventListener('DOMContentLoaded', () => {
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const weatherIconElement = document.querySelector('.weather-icon');
    const humidityElement = document.querySelector('.humidity');
    const windSpeedElement = document.querySelector('.wind-speed');
    const feelslikeElement=document.querySelector('.feels-like')
    const sunriseElement=document.querySelector('.sunrise')
    const sunsetElement=document.querySelector('.sunset')
    const containerElement = document.querySelector('.body');
  
    // Replace with your weather API endpoint and API key
    const apiEndpoint ='http://api.openweathermap.org/data/2.5/weather?id=524901&appid=67c74487cb9d3fe5ac66a56a17d49959';
  
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        temperatureElement.textContent = `${data.main.temp}°C`;
        descriptionElement.textContent = data.weather[0].description;
        weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        humidityElement.textContent = `${data.main.humidity}%`;
        windSpeedElement.textContent = `${data.wind.speed} m/s`;
        feelslikeElement.textContent = `${data.main.feels_like}°C`;
        sunriseElement.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunsetElement.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        const weatherMain = data.weather[0].main.toLowerCase();
        switch (weatherMain) {
          case 'clear':
            containerElement.style.backgroundImage = "url('assets/clear.jpg')";
            break;
          case 'clouds':
            containerElement.style.backgroundImage = "url('assets/clouds.jpg')";
            break;
          case 'rain':
            containerElement.style.backgroundImage = "url('assets/rain.jpg')";
            break;
          case 'snow':
            containerElement.style.backgroundImage = "url('assets/snow.jpg')";
            break;
          case 'thunderstorm':
            containerElement.style.backgroundImage = "url('assets/thunderstorm.jpg')";
            break;
          default:
            containerElement.style.backgroundImage = "url('assets/default.jpg')";
            break;
        }

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });