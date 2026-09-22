const apiKey = "d7d7aecd081bd71d494f5ee8ebfa0189";

const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");


// Check Weather
async function checkWeather(city) {

    city = city.trim();

    if (city === "") {
        return;
    }

    const response = await fetch(
        apiUrl + city + `&appid=${apiKey}`
    );

    const data = await response.json();

    console.log(data);


    // City not found
    if (data.cod !== 200) {
        console.log(data.message);
        return;
    }


    // City
    document.querySelector(".city").innerHTML = data.name;


    // Temperature
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";


    // Humidity
    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";


    // Wind Speed
    document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/hr";


    // Weather condition
    const condition = data.weather[0].main;


    if (condition === "Clouds") {

        weatherIcon.src = "clouds.png";

    } 
    else if (condition === "Clear") {

        weatherIcon.src = "clear.png";

    } 
    else if (condition === "Rain") {

        weatherIcon.src = "rain.png";

    } 
    else if (condition === "Drizzle") {

        weatherIcon.src = "drizzle.png";

    } 
    else if (condition === "Snow") {

        weatherIcon.src = "snow.png";

    } 
    else if (
        condition === "Mist" ||
        condition === "Fog" ||
        condition === "Haze" ||
        condition === "Smoke" ||
        condition === "Dust" ||
        condition === "Sand" ||
        condition === "Ash"
    ) {

        weatherIcon.src = "mist.png";

    } 
    else if (condition === "Squall") {

        weatherIcon.src = "rain.png";

    } 
    else if (condition === "Tornado") {

        weatherIcon.src = "wind.png";

    }


    // Show weather
    weather.style.display = "block";
}


// Search button
searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

});


// Default city
checkWeather("Pune");