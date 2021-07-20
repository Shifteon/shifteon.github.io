function getTemples() {
    const url = "js/temples.json";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((temples) => {
            console.log(temples);
            for (temple in temples) {
                let main = document.querySelector('main');

                let section = document.createElement('section');
                section.classList.add('temple');

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

                let historyHeader = document.createElement('h3');
                historyHeader.textContent = "History";
                div.appendChild(historyHeader);

                let historyList = document.createElement('ul');
                for (key in temples[temple].history) {
                    let item = document.createElement('li');
                    item.textContent = temples[temple].history[key];
                    historyList.appendChild(item);
                }
                div.appendChild(historyList);

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

                let closuresHeader = document.createElement('h3');
                closuresHeader.classList.add('closures-header');
                closuresHeader.innerHTML = `Closures<span class="material-icons-outlined">
                arrow_drop_down
                </span>`;
                div.appendChild(closuresHeader);

                let closures = document.createElement('section');
                closures.classList.add('temple-closures');
                closures.setAttribute('id', temple);
                for (closure of temples[temple].closures) {
                    let item = document.createElement('p');
                    item.textContent = closure;
                    closures.appendChild(item);
                }
                // div.appendChild(closures);

                closuresHeader.addEventListener('click', () => {
                    closures.classList.toggle('display');
                    if (closures.classList.contains('display')) {
                        closuresHeader.innerHTML = `Closures<span class="material-icons-outlined">
                        arrow_drop_up
                        </span>`;
                    } else {
                        closuresHeader.innerHTML = `Closures<span class="material-icons-outlined">
                        arrow_drop_down
                        </span>`;
                    }
                });

                section.appendChild(div);
                section.appendChild(closures);
                main.appendChild(section);
            }
        });
}

window.addEventListener('load', () => {
    getTemples();
});