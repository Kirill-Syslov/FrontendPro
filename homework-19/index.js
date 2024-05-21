// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.

document.addEventListener("DOMContentLoaded", () => {
  const weatherForm = document.getElementById("weatherForm");
  const resetBtn = document.getElementById("reset-btn");
  const weatherIcon = document.getElementById("weather-icon");
  const errorMessage = document.getElementById("error-message");
  const searchBox = document.getElementById("city");

  const apiKey = "00761b7be955aa098c7ad87df5da9266";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
      errorMessage.style.display = "block";
      document.querySelector(".weather").style.display = "none";
      return;
    }

    document.querySelector(".input-city").style.visibility = "hidden";
    document.querySelector(".search").style.visibility = "hidden";

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".feels-like").innerHTML =
      Math.round(data.main.feels_like) + "°C";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "img/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "img/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "img/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "img/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "img/mist.png";
        break;
      default:
        weatherIcon.src = "img/default.png";
    }

    const timeAndDate = new Date();
    let hours = timeAndDate.getHours();
    let minutes = timeAndDate.getMinutes();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = timeAndDate.toLocaleDateString("en-US", options);
    document.querySelector(".month-and-date").innerHTML = `${formattedDate}`;
    document.querySelector(".time").innerHTML = `${hours}:${minutes}`;

    document.querySelector(".weather").style.display = "block";
    errorMessage.style.display = "none";
  }

  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkWeather(searchBox.value);
  });

  resetBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
});
