const content = [{
    img: "hedgehog.png",
    title: "Hedgehog Garden",
    description: "A console based game written in Python.",
    links: [{
        href: "https://github.com/Shifteon/Hedgehog-Garden",
        text: "Github"
    }]
}, {
    img: "music-theory.png",
    title: "Music Theory Help",
    description: "A website that teaches basic music theory concepts. Built using HTML, CSS, and JavaScript. Includes a chord progression generator built with JavaScript.",
    links: [{
        href: "http://musictheoryhelp.glitch.me/",
        text: "View"
    }]
}, {
    img: "howitzer.png",
    title: "Howitzer",
    description: "A physics simulator/game built in C++ and opengl. GitHub repository has to be private.",
    links: [{
        href: "https://youtu.be/kBIM77WMCUo",
        text: "Video"
    }]
}, {
    img: "Notepad(2).png",
    title: "Notepad",
    description: "Notepad is a simple web app for creating and storing notes. It also contains support for multiple users.",
    links: [{
        href: "https://github.com/Shifteon/Notepad",
        text: "Github"
    }]
}, {
    img: "cows.png",
    title: "Cattle in Idaho",
    description: "GIS map to visualize the amount of cattle in Idaho compared to the number of people in every county.",
    links: [{
        href: "https://github.com/Shifteon/Cattle-in-Idaho",
        text: "Github"
    }, {
        href: "https://shifteon.github.io/cows",
        text: "View"
    }]
}, {
    img: "media_library.png",
    title: "Media Library",
    description: "Kotlin application to keep track of your media using a SQLite database",
    links: [{
        href: "https://github.com/Shifteon/Media-Library",
        text: "Github"
    }]
}, {
    img: "campus_art.png",
    title: "Campus Art",
    description: "A web application to help people navigate the artwork on the BYU Idaho campus.",
    links: [{
        href: "https://github.com/Shifteon/campus_art",
        text: "Github"
    }]
}, {
    img: "waypoint.png",
    title: "Waypoint Clothing",
    description: "A website for a student clothing company.",
    links: [{
        href: "https://shifteon.github.io/waypoint",
        text: "View"
    }]
}, {
    img: "hedgehog-graden-graphical.png",
    title: "Hedgehog Garden Graphical",
    description: "A graphical version of Hedgehog Garden made using C# and Raylib.",
    links: [{
        href: "https://github.com/Shifteon/hedgehog-garden-graphical",
        text: "Github"
    }]
}];

const skills = [{
    image: "c++.png",
    alt: "c++ logo"
}, {
    image: "html.png",
    alt: "html logo"
}, {
    image: "CSS-Logo.png",
    alt: "css logo"
}, {
    image: "JavaScript-logo.png",
    alt: "javascript logo"
}, {
    image: "python-logo.png",
    alt: "python logo"
}, {
    image: "mysql.png",
    alt: "mysql logo"
}, {
    image: "c-sharp.png",
    alt: "c# logo"
}, {
    image: "kotlin.png",
    alt: "kotlin logo"
}, {
    image: "php.png",
    alt: "php logo"
}, {
    image: "rsz_1nodejs-white.png",
    alt: "nodejs logo"
}]

function createCards() {
    for (const item of content) {
        // create a card
        let card = document.createElement("article");
        card.classList.add("card");

        // create the links
        let links = item.links.reduce((accumulator, link) =>
            accumulator + `<a class="button" href="${link.href}" target="_blank">${link.text}</a>`, "");

        // set the card content
        let cardContent = `
            <img src="images/${item.img}" alt="card-image">
            <section class="card-body">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${links}
            </section>`;

        card.innerHTML = cardContent;
        document.querySelector('.card-grid').appendChild(card);
    }
}

function populateSkills() {
    for (const skill of skills) {
        // create image for skills
        let image = document.createElement('img');
        image.classList.add('skill-img');
        image.src = `images/skills/${skill.image}`;
        image.alt = `${skill.alt}`;
        // append the image
        document.querySelector('.skills-grid').appendChild(image);
    }
}

createCards();
populateSkills();