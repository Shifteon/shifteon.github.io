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

// TODO: Fix this
async function getPokemonImage(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        fetch(data.varieties[0].pokemon.url)
         .then(response => response.json())
         .then(data => {
            return data;
         });
    });
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

function getImage(url) {
    let image = readFromLS(url);
    if (image != null) {
        return image.image;
    } else {
        getPokemonImage(url)
            .then(data => {
                console.log(data);
                const img = {
                    image: data.sprites.front_default
                };
                writeToLS(url, img);
                return data.sprites.front_default;
            });
    }
}

export { getPokeInfo, getImage };