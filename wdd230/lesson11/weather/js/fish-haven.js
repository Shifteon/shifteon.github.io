async function getFiveDay() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&appid=be8753d36dab0642baf37a7f8906882f";

    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found: " + response.status);
    }
}

async function getCurrWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&appid=be8753d36dab0642baf37a7f8906882f";

    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found: " + response.status);
    }
}

function weather() {
    getCurrWeather()
    .then((w) => {
        console.log(w);

        let currHigh = document.querySelector('#tempature');
        let humidity = document.querySelector('#humidity');
        let windSpeed = document.querySelector('#wind-speed');
        let weatherDesc = document.querySelector('#weather-desc'); 

        weatherDesc.textContent = w.weather[0].main;
        currHigh.textContent = Math.floor(w.main.temp);
        humidity.textContent = w.main.humidity;
        windSpeed.textContent = w.wind.speed;
    });

    getFiveDay()
    .then((w) => {
        console.log(w);

        let dayNum = 1;
        for (item of w.list) {
            if (item.dt_txt.includes("18:00:00")) {
                let day = document.querySelector('#day' + dayNum + " .temp");
                let dayDesc = document.querySelector('#day' + dayNum + " .day-desc");
                let dayImg = document.querySelector('#day' + dayNum + " img");

                day.textContent = Math.floor(item.main.temp);
                dayDesc.textContent = item.weather[0].main;
                dayImg.setAttribute('src', "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png")

                dayNum++;
            }
        }
    });
}

async function getTownData() {
    const url = "https://byui-cit230.github.io/weather/data/towndata.json";

    const response = await fetch(url);
    if (response.status == 200) {
        return response.json()
    } else {
        throw new Error("No town data found " + response.status)
    }
}

function events() {
    const data = getTownData()
        .then(function(town) {
            console.log(town);

            // Find the index for the towns
            for (item in town["towns"]) {
                if (town["towns"][item].name == "Fish Haven")
                    var fh = item;
            }

            const eventSection = document.querySelector('#events');
            for (item of town["towns"][fh].events) {
                console.log(item)
                let p = document.createElement('p');
                p.textContent = item;
                eventSection.appendChild(p);
            }
        });
}

window.addEventListener('load', () => {
    weather();
    events();
});