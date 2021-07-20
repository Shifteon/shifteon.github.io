function openNav() {
    // Create responsive nav
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive');
    }, false);
}

function getTemples() {
    const url = "js/temples.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((temples) => {
            console.log(temples.seattle);
        });
}

function getDate() {
    // Set the date on the footer
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    document.querySelector('#footer-date').textContent = day + ", " + date.getDate() + " " + month + " " + date.getFullYear();
}

window.addEventListener('load', () => {
    openNav();
    getDate();
    getTemples();
});