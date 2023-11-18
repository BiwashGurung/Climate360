const searchInput = document.querySelector("#searchInput");
searchButton = document.querySelector("#searchBtn");
weatherIcon = document.querySelector(".weather-icon");
windSpeed = document.querySelector(".wind");
humidity = document.querySelector(".humidity");
weather = document.querySelector(".temp");
city = document.querySelector(".city");
API = "c7377c7305e6798286b1883817b0075e";

const setWeatherDetails = (data) => {
  console.log(data);
  city.innerHTML = data.name;
  weather.innerHTML = Math.round(data.main.temp - 273.15) + "°c";
  humidity.innerHTML = data.main.humidity + "%";
  windSpeed.innerHTML = data.wind.speed + "km/h";
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/sun.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rainy.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
    case "Haze":
      weatherIcon.src = "images/haze.png";
      break;
  }
};

