let projects = document.querySelector("#projects");
let button = document.querySelector("#projects button");

button.addEventListener('click', () => {
    projects.classList.toggle("expanded");
    if (projects.classList.contains("expanded")) {
        button.textContent = "View Less";
    } else {
        button.textContent = "View More";
    }
});