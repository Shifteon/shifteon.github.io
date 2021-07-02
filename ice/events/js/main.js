async function getEvents() {
    const url = "https://www.ahfx.com/events.php";

    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No events found " + response.status);
    }
}

function events() {
    getEvents()
        .then((response) => {
            console.log(response);

            for (item of response) {
                console.log(item);

                let container = document.createElement('div');
                let eventDate = document.createElement('div');
                let tags = document.createElement('div');
                let title = document.createElement('div');
                let time = document.createElement('div');
                let event = document.createElement('div');

                container.classList.add('event_container');
                eventDate.classList.add('date');
                tags.classList.add('tags');
                title.classList.add('title');
                time.classList.add('time');
                event.classList.add('event');

                let start = new Date(item.properties.start);
                let end = new Date(item.properties.end);
                console.log(start.toLocaleTimeString('en-US'))
                const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                eventDate.innerHTML = `<p>${start.getFullYear()}</p>
                                       <h1>${start.getDate()}</h1>
                                       <p>${month[start.getMonth()]}</p>`;
                for (tag of item.tags) {
                    let span = document.createElement('span');
                    span.textContent = tag;
                    if (tag == "Cancelled") {
                        span.style.backgroundColor = "red";
                    }
                    tags.appendChild(span);
                }
                title.innerHTML = `<h2>${item.properties.name}</h2>`;
                let startTime = start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                if (startTime[0] == 0) {
                    startTime = startTime.slice(1, startTime.length);
                }
                let endTime = end.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                if (endTime[0] == 0) {
                    endTime = endTime.slice(1, endTime.length);
                }
                time.innerHTML = `<p>${startTime} - ${endTime}</p>`;
                event.innerHTML = `<p>Event Type: ${item.type}</p>`

                container.appendChild(eventDate);
                container.appendChild(tags);
                container.appendChild(title);
                container.appendChild(time);
                container.appendChild(event);


                document.querySelector('body').appendChild(container);

            }
        });
}

window.addEventListener('load', events());
c