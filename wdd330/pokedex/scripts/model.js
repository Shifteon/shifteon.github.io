import { readFromLS, writeToLS } from "./ls.js";

/*
Fetch Pokemon data from the PokeAPI
*/
async function getPokemon(region) {
    const url = `https://pokeapi.co/api/v2/pokedex/${region}/`;

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("Error retrieving pokemon: " + response.status);
    }
}

/* 
Read Pokemon info from local storage or 
fetch it from the PokeAPI if it doesn't exist 
*/
function getPokeInfo(region="hoenn") {
    let pokeInfo = readFromLS(region);
    if (pokeInfo != null) {
        return pokeInfo;
    } else {
        getPokemon(region)
        .then(data => {
            writeToLS(region, data);
        });
        return readFromLS(region);
    }
}

export { getPokeInfo };