async function getPerson() {
    const url = "https://www.ahfx.com/person.php";

    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No people found" + response.status);
    }
}

function newPerson() {
    const person = getPerson()
        .then(function (p) {
            console.log(p);

            const personName = document.querySelector('#person-name');
            const password = document.querySelector('#password');
            const email = document.querySelector('#email');
            const eyeColor = document.querySelector('#eye-color');
            const cityCountry = document.querySelector('#city-country');
            const numChildren = document.querySelector('#num-children');
            const ip = document.querySelector('#ip');

            personName.innerHTML = p["person"]["personal"]["name"] + " " + p["person"]["personal"]["last_name"] + ", " + p["person"]["personal"]["age"];
            password.innerHTML = "Password: " + p["person"]["online_info"]["password"];
            email.innerHTML = "Email: " + p["person"]["online_info"]["email"];
            eyeColor.innerHTML = "Eye Color: " + p["person"]["personal"]["eye_color"];
            cityCountry.innerHTML = p["person"]["personal"]["city"] + ", " + p["person"]["personal"]["country"];
            if (p["person"]["marriage"]["married"] == true)
                numChildren.innerHTML = "Children: " + p["person"]["marriage"]["children"];
            ip.innerHTML = "Ip Address: " + p["person"]["online_info"]["ip_address"];
        });
}

window.addEventListener('load', newPerson());