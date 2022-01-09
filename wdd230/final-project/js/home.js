function homeTemple() {
    const url = "js/temples.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((temples) => {
            const date = new Date();
            if (date.getDay() == 0 || date.getDay() == 1) {
                var temple = 'rexburg';
            } else if (date.getDay() == 2 || date.getDay() == 3) {
                var temple = 'sacramento';
            } else if (date.getDay() == 4 || date.getDay() == 5) {
                var temple = 'seattle';
            } else {
                var temple = 'provo';
            }

            console.log(temples);
            let main = document.querySelector('main');
            let miniNav = document.querySelector('#mini-nav');

            let section = document.createElement('section');
            section.classList.add('temple');
            section.setAttribute('id', 'home-temple');

            let imgContainer = document.createElement('div');
            imgContainer.classList.add('temple-img');

            let img = document.createElement('img');
            img.src = "images/" + temples[temple].image;
            img.setAttribute('alt', temples[temple].imageAlt);
            imgContainer.appendChild(img);

            let div = document.createElement('div');
            div.classList.add('temple-info');

            let header = document.createElement('h1');
            header.textContent = temples[temple].name;
            imgContainer.appendChild(header);

            section.appendChild(imgContainer);

            let addressHeader = document.createElement('h3');
            addressHeader.textContent = "Address";
            div.appendChild(addressHeader);

            let address = document.createElement('p');
            address.textContent = temples[temple].address;
            div.appendChild(address);

            let phoneHeader = document.createElement('h3');
            phoneHeader.textContent = "Phone Number";
            div.appendChild(phoneHeader);

            let phone = document.createElement('p');
            phone.textContent = temples[temple].telephone;
            div.appendChild(phone);

            let servicesHeader = document.createElement('h3');
            servicesHeader.textContent = "Services";
            div.appendChild(servicesHeader);

            let services = document.createElement('ul');
            for (service of temples[temple].services) {
                let item = document.createElement('li');
                item.textContent = service;
                services.appendChild(item);
            }
            div.appendChild(services);

            let ordinanceHeader = document.createElement('h3');
            ordinanceHeader.textContent = "Ordinace Schedule";
            div.appendChild(ordinanceHeader);

            let ordinance = document.createElement('p');
            ordinance.textContent = temples[temple].ordinanceSched;
            div.appendChild(ordinance);

            let sessionHeader = document.createElement('h3');
            sessionHeader.textContent = "Session Schedule";
            div.appendChild(sessionHeader);

            let session = document.createElement('p');
            session.textContent = temples[temple].sessionSched;
            div.appendChild(session);

            section.appendChild(div);
            main.insertBefore(section, miniNav);
        });
}

window.addEventListener('load', () => {
    homeTemple();
});