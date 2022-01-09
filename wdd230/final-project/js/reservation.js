function getRoomType(value) {
    let parent = document.querySelector('form');
    let numElements = document.querySelectorAll('select[name="room-type"]');
    let numLabels = document.querySelectorAll('label.room-type');
    let before = document.querySelector('label[for="comments"]');
    if (numElements.length < value) {
        let num = numElements.length;
        while (num < value) {
            let label = document.createElement('label');
            let type = document.createElement('select');

            label.setAttribute('for', `room-type${num + 1}`);
            label.classList.add('room-type')
            label.textContent = `Room ${num + 1}`;

            type.setAttribute('name', `room-type`);
            type.setAttribute('id', `room-type${num + 1}`);
            type.innerHTML = `<option value="0" disabled>Select Room Type...</option>
                      <option value="1">Standard</option>
                      <option value="2">Deluxe</option>
                      <option value="3">Joint</option>
                      <option value="4">Suite</option>
                      <option value="5">Accessible</option>`;

            parent.insertBefore(type, before);
            parent.insertBefore(label, type);
            num++;
        }
    }

    if (numElements.length > value) {
        let num = numElements.length;
        while (num > value) {
            parent.removeChild(numElements[num - 1]);
            parent.removeChild(numLabels[num - 1]);
            num--;
        }
    }
}

// window.addEventListener('load', getRoomType(1));