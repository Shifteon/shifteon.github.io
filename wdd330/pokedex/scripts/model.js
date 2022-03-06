import { readFromLS, writeToLS } from "./ls.js";

async function getPokemon() {
    const url = "https://pokeapi.co/api/v2/pokedex/hoenn/";

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("Error retrieving pokemon: " + response.status);
    }
}

function getPokeInfo() {
    let pokeInfo = readFromLS("pokeInfo");
    if (pokeInfo != null) {
        return pokeInfo;
    } else {
        getPokemon()
        .then(data => {
            writeToLS("pokeInfo", data);
        });
        return readFromLS("pokeInfo");
    }
}

export { getPokeInfo };