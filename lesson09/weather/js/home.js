async function getTownData() {
    const url = "https://byui-cit230.github.io/weather/data/towndata.json";

    const response = await fetch(url);
    if (response.status == 200) {
        return response.json()
    } else {
        throw new Error("No town data found " + response.status)
    }
}

function townData() {
    const data = getTownData()
        .then(function(town) {
            console.log(town);

            const preston = document.querySelector('#preston');
            const fishHaven = document.querySelector('#fish-haven');
            const sodaSprings = document.querySelector('#soda-springs');

            let prestonMotto = document.createElement('h3');
            let fishHavenMotto = document.createElement('h3');
            let sodaSpringsMotto = document.createElement('h3');

            let prestonYearFounded = document.createElement('p');
            let fishHavenYearFounded = document.createElement('p');
            let sodaSpringsYearFounded = document.createElement('p');

            let prestonPopulation = document.createElement('p');
            let fishHavenPopulation = document.createElement('p');
            let sodaSpringsPopulation = document.createElement('p');

            let prestonRain = document.createElement('p');
            let fishHavenRain = document.createElement('p');
            let sodaSpringsRain = document.createElement('p');

            let prestonImg = document.createElement('img');
            let fishHavenImg = document.createElement('img');
            let sodaSpringsImg = document.createElement('img');

            prestonMotto.textContent = town["towns"][6].motto;
            fishHavenMotto.textContent = town["towns"][2].motto;
            sodaSpringsMotto.textContent = town["towns"][0].motto;
            prestonMotto.classList.add('motto');
            fishHavenMotto.classList.add('motto');
            sodaSpringsMotto.classList.add('motto');

            prestonYearFounded.textContent = "Year Founded: " + town["towns"][6].yearFounded;
            fishHavenYearFounded.textContent = "Year Founded: " + town["towns"][2].yearFounded;
            sodaSpringsYearFounded.textContent = "Year Founded: " + town["towns"][0].yearFounded;

            prestonPopulation.textContent = "Population: " + town["towns"][6].currentPopulation;
            fishHavenPopulation.textContent = "Population: " + town["towns"][2].currentPopulation;
            sodaSpringsPopulation.textContent = "Population: " + town["towns"][0].currentPopulation;

            prestonRain.textContent = "Annual Rain Fall: " + town["towns"][6].averageRainfall;
            fishHavenRain.textContent = "Annual Rain Fall: " + town["towns"][2].averageRainfall;
            sodaSpringsRain.textContent = "Annual Rain Fall: " + town["towns"][0].averageRainfall;

            prestonImg.setAttribute('src', "https://picsum.photos/300/200")
            fishHavenImg.setAttribute('src', "https://picsum.photos/300/200")
            sodaSpringsImg.setAttribute('src', "https://picsum.photos/300/200")

            preston.appendChild(prestonMotto);
            fishHaven.appendChild(fishHavenMotto);
            sodaSprings.appendChild(sodaSpringsMotto);

            preston.appendChild(prestonYearFounded);
            fishHaven.appendChild(fishHavenYearFounded);
            sodaSprings.appendChild(sodaSpringsYearFounded);

            preston.appendChild(prestonPopulation);
            fishHaven.appendChild(fishHavenPopulation);
            sodaSprings.appendChild(sodaSpringsPopulation);

            preston.appendChild(prestonRain);
            fishHaven.appendChild(fishHavenRain);
            sodaSprings.appendChild(sodaSpringsRain);

            preston.appendChild(prestonImg);
            fishHaven.appendChild(fishHavenImg);
            sodaSprings.appendChild(sodaSpringsImg);
        }
        );
}

townData();