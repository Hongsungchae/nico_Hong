const API_KEY = "f97b8227804e0e5d5fdec2c498b79ab2";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metirc`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} /${data.main.temp}`;
    });
}

function onGeoError() {
  alert("당신의 위치를 못찾아서 날씨를 못알려준다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
