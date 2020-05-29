const majorNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'viio'];

const minorNumerals = ['i', 'iio', 'III', 'iv', 'V', 'VI', 'viio'];

var progression = [];

function generate() {
    progression = [];

    let mode = document.querySelector('#mode').value;
    console.log("mode " + mode);

    let numChords = document.querySelector('#num-chords').value;
    console.log("numChords " + numChords);

    let cadence = document.querySelector('#cadence').value;
    console.log("cadence " + cadence);

    console.log(progression);

    let location = numChords - 2;
    let cadenceType = 1;
    cadenceType = addCadence(cadence, location, numChords, cadenceType);
    console.log("From cadence: " + cadenceType);
    let chordValue = cadenceType;
    for (let index = 0; index < numChords - 3; index++) {
        chordValue = nextChord(chordValue, location, mode);
        location--;
        console.log("Chord value: " + chordValue);
        console.log("Location: " + location);
    }
    if (mode == 1) {
        progression.unshift('I');
    } else if (mode == 2) {
        progression.unshift('i');
    }
    addCadence(cadence, location, numChords, cadenceType, mode);
    console.log(progression);

    displayProgression();
}

// In this version we are thinking backwards.
function nextChord(chord, location, mode) {
    let symbol = '';
    while (true) {
        if (chord == 0) { //The I chord
            let filter = Math.floor(Math.random() * 2);
            if (filter == 0) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[4] : minorNumerals[4]);
                return 4;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[6] : minorNumerals[6]);
                return 6;
            }
        }
        if (chord == 1) { //The ii chord
            let filter = Math.floor(Math.random() * 3);
            if (filter == 0) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[3] : minorNumerals[3]);
                return 3;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[5] : minorNumerals[5]);
                return 5;
            } else if (filter == 2) {
                if (location == 2)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
                return 0;
            }
        }
        if (chord == 2 && location != 2) { //The iii chord
            if (location == 2)
                continue;
            progression.unshift(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
            return 0;
        }
        if (chord == 3) { //The IV chord
            let filter = Math.floor(Math.random() * 2);
            if (filter == 0) {
                if (location == 3)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[2] : minorNumerals[2]);
                return 2;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[5] : minorNumerals[5]);
                return 5;
            } else if (filter == 0) {
                if (location == 2)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
                return 0;
            }
        }
        if (chord == 4) { //The V chord
            let filter = Math.floor(Math.random() * 3);
            if (filter == 0) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[1] : minorNumerals[1]);
                return 1;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[3] : minorNumerals[3]);
                return 3;
            } else if (filter == 2) {
                if (location == 2)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
                return 0;
            }
        }
        if (chord == 5) { //The vi chord
            let filter = Math.floor(Math.random() * 4);
            if (filter == 0) {
                if (location == 3)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[2] : minorNumerals[2]);
                return 2;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[4] : minorNumerals[4]);
                return 4;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[6] : minorNumerals[6]);
                return 6;
            } else if (filter == 3) {
                if (location == 2)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
                return 0;
            }
        }
        if (chord == 6) { //The viio chord
            let filter = Math.floor(Math.random() * 3);
            if (filter == 0) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[1] : minorNumerals[1]);
                return 1;
            } else if (filter == 1) {
                progression.unshift(symbol = (mode == 1) ? majorNumerals[3] : minorNumerals[3]);
                return 3;
            } else if (filter == 2) {
                if (location == 2)
                    continue;
                progression.unshift(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
                return 0;
            }
        }
    }

}

function addCadence(cadence, location, numChords, cadenceType, mode) {
    if (location == numChords - 2) {
        if (cadence == 1) {
            let filter = Math.floor(Math.random() * 2);
            if (filter == 0)
                return 4;
            else if (filter == 1)
                return 6;
        } else if (cadence == 2) {
            let filter = Math.floor(Math.random() * 3);
            if (filter == 0)
                return 0;
            else if (filter == 1)
                return 1;
            else if (filter == 2)
                return 3;
        } else if (cadence == 3)
            return 3;
    } else {
        let symbol = '';
        console.log("I'm happening boss!");
        if (cadence == 1) {
            progression.push(symbol = (mode == 1) ? majorNumerals[cadenceType] : minorNumerals[cadenceType]);
            progression.push(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
        } else if (cadence == 2) {
            progression.push(symbol = (mode == 1) ? majorNumerals[cadenceType] : minorNumerals[cadenceType]);
            progression.push(symbol = (mode == 1) ? majorNumerals[4] : minorNumerals[4]);
        } else if (cadence == 3) {
            progression.push(symbol = (mode == 1) ? majorNumerals[cadenceType] : minorNumerals[cadenceType]);
            progression.push(symbol = (mode == 1) ? majorNumerals[0] : minorNumerals[0]);
        }
    }
}

function displayProgression() {

    let progressionText = document.createElement('tr');
    let newProgression = progression.map(string => {
        return ' ' + string;
    });

    progressionText.textContent = newProgression;
    progressionText.setAttribute('class', 'font-weight-bold');
    progressionText.setAttribute('style', 'margin-top: 20px;');

    document.querySelector('#tbody').appendChild(progressionText);
}

function resetDisplay() {
    document.querySelector('#tbody').innerHTML = '';
}

function displaySongs(songData) {
    let div = document.createElement('div');
    let text = document.createElement('p');

    let content = songData.map(string => ' ' + string.song);
    text.textContent = content;

    div.setAttribute('style', 'height: 7rem; overflow: auto; width: 50rem;');
    div.setAttribute('id', 'song-info');
    div.appendChild(text);
    document.querySelector('#tbody').append(div);
}

function hookTheory() {
    let chords = progression.map(string => {
        if (string == 'I' || string == 'i') {
            return '1';
        } else if (string == 'ii' || string == 'iio') {
            return '2';
        } else if (string == 'iii' || string == 'III') {
            return '3';
        } else if (string == 'IV' || string == 'iv') {
            return '4';
        } else if (string == 'V') {
            return '5';
        } else if (string == 'vi' || string == 'VI') {
            return '6';
        } else if (string == 'viio') {
            return '7';
        }
    })
    let newChords = chords.map((string, index) => {
        if (index < chords.length)
            return string + ',';
        else
            return string;
    })

    let url = "https://api.hooktheory.com/v1/trends/songs?cp=" + chords;
    // let url = "https://api.hooktheory.com/v1/users/auth";

    let songData;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer 987a84c3f4b37121beb667b59c73b3ce');

    let request = new Request(url, {
        method: 'GET',
        // body: JSON.stringify(login),
        headers: headers
    })

    fetch(request)
        .then(response => response.json())
        .then(data => {
            songData = data;
            console.log(songData);
            displaySongs(songData);
        })
        .catch(error => {
            console.log(error);
            // displaySongs()
        })

}

// hookTheory();
document.querySelector('#generate').addEventListener('click', generate);

document.querySelector('#lookup').addEventListener('click', hookTheory);

document.querySelector('#clear').addEventListener('click', resetDisplay);