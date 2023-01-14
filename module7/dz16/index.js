const weather = document.getElementById('weather');

fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
            .then(response => response.json())
            .then(json => {
                  console.log(json);
                  weather.innerHTML += '<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png" alt="' + json.weather.main + '"/>';
                  weather.innerHTML += '<h3>City: ' + json.name + '</h3>';
                  weather.innerHTML += '<h4>Temperature: ' + json.main.temp + '°</h4>';
                  weather.innerHTML += '<p>Weather: ' + json.weather[0].main + ',' + json.weather[0].description + '</p>';
                  weather.innerHTML += '<p>Pressure: ' + json.main.pressure + '</p>';
                  weather.innerHTML += '<p>Humidity: ' + json.main.humidity + '</p>';
                  weather.innerHTML += '<p>Wind speed: ' + json.wind.speed + '</p>';
                  weather.innerHTML += '<p>Wind deg: ' + json.wind.deg + '</p>';                 
            });