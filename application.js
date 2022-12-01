const temperature = document.querySelector(".cityTemp");
const description = document.querySelector(".weatherDescription");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

var searchButton = document.querySelector(".searchButton");
var searchValue = document.querySelector(".searchFieldInput");
const takeUserInput = function () {
    var city = searchValue.value;
    retrieveCityWeather(city);
}

const retrieveCityWeather = function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6269169557693b21bd706ec63e7b3f09&units=metric')
        .then(response => {
            if(!response.ok) {
                alert("No weather is available for this input");
            }
            const responseFromApi = response.json();
            return responseFromApi;
        })

        .then(responseFromApi => {
            displayWeather(responseFromApi);
        })

        .catch(err => {
            console.log(err);
        });

        
}

const displayWeather = function(responseFromApi) {

    temperature.innerHTML = "Temperature: " + Math.round(responseFromApi.main.temp) + " °C";
    description.innerText = "Description: "+ responseFromApi.weather[0].description;
    humidity.innerText = "Humidity: " + responseFromApi.main.humidity + "%";
    wind.innerText = "Wind speed: " + responseFromApi.wind.speed + " km/h";
}