console.log("Sanyam Miglani");

const API_KEY = ;

async function showWeather(){
    let city  = " jind";

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric');
    const data = await response.json();
    console.log("Weather data:-> " + data);
}
