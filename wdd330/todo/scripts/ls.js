
function readFromLS(key) {
    const item = localStorage.getItem(key);

    // return the parsed array
    return JSON.parse(item);
}

function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export { readFromLS, writeToLS };