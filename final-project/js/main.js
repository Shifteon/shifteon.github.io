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

window.addEventListener('load', () => {
    openNav();
    getTemples();
});