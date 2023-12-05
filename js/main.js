document.addEventListener('DOMContentLoaded', () => {
  // Set event api here
  document.getElementById('weather_search_btn')
    .addEventListener('click', () => {
      callWeather();
  });
});

function callWeather() {
  const api_key = '79c8e4dcfe4d4c62bf22086b3d64946d';
  const city = document.getElementById('weather_search').value || '';

  if (city === '') {
    alert('Ingresa una ciudad en el cuadro de texto');
    return;
  }

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;

  fetch(endpoint)
    .then(response => response.json())
    .then(response => onResponse(response))
    .catch(err => onError(err));
}

function onResponse(response) {
  const { main } = response;
  const { temp, temp_min, temp_max, humidity } = main;

  const tempEl = document.getElementById('weather_temp');
  const tempMaxEl = document.getElementById('weather_max');
  const tempMinEl = document.getElementById('weather_min');
  const humidityEl = document.getElementById('weather_hum');

  tempEl.innerHTML = 'Temperatura: ' + temp + ' C';
  tempMaxEl.innerHTML = 'Maxima: ' + temp_max + ' C';
  tempMinEl.innerHTML = 'Minima: ' + temp_min + ' C';
  humidityEl.innerHTML = 'Humedad: ' + humidity + '%'
}

function onError(err) {
  alert('Ocurrio un error al mostrar el clima o la ciudad no es valida');
}
