let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let currentDay = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

dateElement.innerHTML = `${days[currentDay]} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = "Paris";
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

function showTemperature(response) {
  let cityTemp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  cityTemp.innerHTML = `${temperature}&#176C`;
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = `${temperature}`;
  cityElement.innerHTML = `${response.data.name}`;

  let apiKey = "42fc9ffc1da4d22ab3a123055816708c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}