import { readFromLS, writeToLS } from "./ls.js";

/*
Fetch Pokemon data from the PokeAPI
*/
async function fetchPokemon(region) {
    const url = `https://pokeapi.co/api/v2/pokedex/${region}/`;

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("Error retrieving pokemon: " + response.status);
    }
}

/*
Fetch info on a single pokemon
*/
async function fetchSinglePokemon(url) {
    const response = await fetch(url);
    const data = await response.json();


    const pokemon = await fetch(data.varieties[0].pokemon.url);
    const pokemonData = await pokemon.json();
    // console.log(pokemonData);
    if (pokemon.status == 200) {
        return pokemonData;
    } else {
        throw new Error("Error retrieving single pokemon: " + response.status);
    }
}

/*
Get info on a single pokemon
Can't use this function because pokemon data is too big
*/
async function getSinglePokemon(url) {
    let info = readFromLS(url);
    if (info != null) {
        return info;
    } else {
        const data = await fetchSinglePokemon(url);
        // console.log(data);
        writeToLS(url, data);
        
        return readFromLS(url);
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
        fetchPokemon(region)
        .then(data => {
            writeToLS(region, data);
        });
        return readFromLS(region);
    }
}

/*
Get the image url for a pokemon
*/
async function getImage(url) {
    let image = readFromLS(url);
    if (image != null) {
        return image.image;
    } else {
        const data = await fetchSinglePokemon(url);
        // console.log(data);
        const img = {
                image: data.sprites.front_default
        };
        writeToLS(img);
        return data.sprites.front_default;
    }
}

/*
Check a pokemon as obtained
*/
function obtainPokemon(url) {

}

export { getPokeInfo, getImage, obtainPokemon };