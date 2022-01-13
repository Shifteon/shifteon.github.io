async function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=be8753d36dab0642baf37a7f8906882f&units=imperial";

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("Error: " + response.status);
    }
}

function displayWeather() {
    const w = getWeather()
        .then(function(weather) {
            console.log(weather);

            const elm = document.querySelector('#weather');
            let temp = document.createElement('p');

            temp.textContent = "Temp: " + weather["main"]["temp"] + " F";

            elm.appendChild(temp);
        });
}

window.addEventListener('load', displayWeather());