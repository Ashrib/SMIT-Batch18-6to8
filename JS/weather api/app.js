

let searchBtn = document.querySelector('#search-btn')
let input = document.querySelector('#city-input')
let weatherDiv = document.querySelector('#weather')


let fetchLocation = async (city) => {
    try {
        let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
        response = await response.json();
        let data = response.results[0];
        console.log(data)
        return data;
    } catch (error) {
        console.error(error)
    }
}

let fetchWeatherInfo = async (lan, lat, name) => {
    try {
        let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lan}&current_weather=true`)
        response = await response.json();
        console.log(response);
        return response;


    } catch (error) {
        console.error(error);

    }
}

let renderWeatherInfo = (weatherData, name) => {
    let { current_weather, current_weather_units } = weatherData;

    weatherDiv.innerHTML = ''

    weatherDiv.innerHTML = `<div>
    <h1>${name}</h1>
    <p> 
        Temperature: ${current_weather.temperature} ${current_weather_units.temperature}
    </p>
     <p> 
        wind speed: ${current_weather.windspeed} ${current_weather_units.windspeed}
    </p> 
    <p> 
        wind direction: ${current_weather.winddirection} ${current_weather_units.winddirection}
    </p>
     <p> 
        time: ${current_weather.time} ${current_weather_units.time}
    </p>
    </div>`
}


searchBtn.addEventListener('click', () => {
    let cityName = input.value;
    console.log(cityName);

    if (cityName.length < 3) {
        alert('invalid')
        return;
    }

    fetchLocation(cityName).then((data) => {
        let { latitude, longitude, name } = data;
        fetchWeatherInfo(longitude, latitude, name).then((weatherData) => {
            renderWeatherInfo(weatherData, name)
        })

    });

});


////https://geocoding-api.open-meteo.com/v1/search?name=Karachi
//// https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current_weather=true


