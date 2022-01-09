function closeWeddingPopup() {
    let btn = document.querySelector('#wedding-popup button');
    let popup = document.querySelector('#wedding-popup');

    btn.addEventListener('click', () => {
        popup.classList.remove('display');
    });
}

function openWeddingPopup() {
    let btn = document.querySelector('#wedding button');
    let popup = document.querySelector('#wedding-popup');

    btn.addEventListener('click', () => {
        popup.classList.add('display');
    })
}

function closeMissionaryPopup() {
    let btn = document.querySelector('#missionary-popup button');
    let popup = document.querySelector('#missionary-popup');

    btn.addEventListener('click', () => {
        popup.classList.remove('display');
    });
}

function openMissionaryPopup() {
    let btn = document.querySelector('#missionary button');
    let popup = document.querySelector('#missionary-popup');

    btn.addEventListener('click', () => {
        popup.classList.add('display');
    })
}

window.addEventListener('load', () => {
    openWeddingPopup();
    closeWeddingPopup();
    openMissionaryPopup();
    closeMissionaryPopup();
});