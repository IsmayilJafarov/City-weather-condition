const apiKey = '846c2026c587416f8cc03502230304'

'XML: http://api.weatherapi.com/v1/current.xml?key=${apiKey}&q=${city}'

'JSON: http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}'

const resultNode = document.querySelector('.result');
const inputNode = document.querySelector('.input');
const confirmBtn = document.querySelector('.confirm-button');
const formNode = document.querySelector('.form');

const country = document.querySelector('.country')
const condition = document.querySelector('.condition')
const windInKph = document.querySelector('.wind-in-kph')
const windInMph = document.querySelector('.wind-in-mph')
const tempInCelsius = document.querySelector('.temp-in-celsius')
const tempInFahrenheit = document.querySelector('.temp-in-fahrenheit')
const feelsLikeFahrenheit = document.querySelector('.feels-like-fahrenheit')
const feelsLikeCelsius = document.querySelector('.feels-like-celsius')
const humidity = document.querySelector('.humidity')
const windDirection = document.querySelector('.wind-direction')
const pressure = document.querySelector('.pressure')
const cloud = document.querySelector('.cloud')
const ultraViolet = document.querySelector('.ultra-violet')


formNode.addEventListener('submit', (e) => {
    e.preventDefault(e);
    let city = inputNode.value.trim();
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}'`;

    fetch(url).then((response) => {
        return response.json();
    }).then((data => {

        country.innerHTML = data.location.country
        condition.innerHTML = 'Condition - ' + data.current.condition.text
        windInKph.innerHTML = 'Maximum wind speed in kilometers per hour is ' + data.current.wind_kph 
        windInMph.innerHTML = 'Maximum wind speed in miles per hour is ' + data.current.wind_mph 
        tempInCelsius.innerHTML = 'Temperature in celsius is ' + data.current.temp_c 
        tempInFahrenheit.innerHTML = 'Temperature in fahrenheit ' + data.current.temp_f 
        feelsLikeFahrenheit.innerHTML = 'Feels like ' + data.current.feelslike_f + ' fahrenheit'
        feelsLikeCelsius.innerHTML = 'Feels like ' + data.current.feelslike_c + ' celsius'
        humidity.innerHTML = 'Humidity is ' + data.current.humidity + ' percent'
        windDirection.innerHTML = 'Wind direction as 16 point compass is ' + data.current.wind_dir 
        pressure.innerHTML = 'Pressure in millibars is ' + data.current.pressure_mb 
        cloud.innerHTML = 'Cloud cover is ' + data.current.cloud + ' percent'
        ultraViolet.innerHTML = 'Ultra Violet Index is ' + data.current.uv 

    }));
});


