document.addEventListener('DOMContentLoaded', () => {
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const weatherIconElement = document.querySelector('.weather-icon');
    const humidityElement = document.querySelector('.humidity');
    const windSpeedElement = document.querySelector('.wind-speed');
  
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
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });