function showForecast() {
    const forecast = document.querySelector('.forecast');
    const forecastHeader = document.querySelector('#forecast-header')
    const hidden = window.getComputedStyle(forecast);

    forecastHeader.addEventListener('click', () => {
        // Only toggle the class if we are on the small view size
        if (window.matchMedia("(min-width: 768px)").matches || window.matchMedia("(min-width: 1024px)").matches)
            return;
        forecast.classList.toggle('show');
    });
}

window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    // To resolve the mid resizing issue with class on
    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove('responsive')
    };

    showForecast();
});