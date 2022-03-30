import { readFromLS, writeToLS } from "./ls.js";

// list of regions
const regions = [
    {
        value: "national",
        name: "National"
    },
    {
        value: "kanto",
        name: "Kanto"
    },
    {
        value: "original-johto",
        name: "Johto"
    },
    {
        value: "hoenn",
        name: "Hoenn"
    },
    {
        value: "original-sinnoh",
        name: "Sinnoh"
    },
    {
        value: "original-unova",
        name: "Unova"
    },
    {
        value: "kalos-central",
        name: "Kalos Central"
    },
    // {
    //     value: "kalos-costal",
    //     name: "Kalos Costal"
    // },
    {
        value: "kalos-mountain",
        name: "Kalos Mountain"
    },
    {
        value: "original-alola",
        name: "Alola"
    },
    {
        value: "galar",
        name: "Galar"
    }
];

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

    // Get the more specific data
    const pokemon = await fetch(data.varieties[0].pokemon.url);
    const pokemonData = await pokemon.json();
    // console.log(pokemonData);
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
async function getPokeInfo(region, filter="NONE", page=1) {
    let pokeInfo = readFromLS(region);
    let info = [];
    if (pokeInfo == null) {
        const data = await fetchPokemon(region);
        writeToLS(region, data);
        pokeInfo = readFromLS(region);
    }

    pokeInfo = pokeInfo.pokemon_entries;

    let length;

    // filter which pokemon are actually returned
    switch (filter) {
        case "favorite":
            for (let poke of pokeInfo) {
                if (isFavorite(poke.pokemon_species.url)) {
                    info.push(poke);
                }
            }
            length = info.length;
            break;
        case "obtained":
            for (let poke of pokeInfo) {
                if (isObtained(poke.pokemon_species.url)) {
                    info.push(poke);
                }
            }
            length = info.length;
            break;
        default:
            info = pokeInfo;
            length = info.length;
            break;
    }
    const numPerPage = 20;
    return {
        "pokemon": info.splice((page - 1) * numPerPage, numPerPage),
        "numPokemon": length
    };
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
        
        const pokemon = readFromLS(url);
        if (pokemon != null) {
            pokemon.image = data.sprites.front_default;
            writeToLS(url, pokemon);
        } else {
            const img = {
                image: data.sprites.front_default
            };
            writeToLS(url, img);
        }
        return data.sprites.front_default;
    }
}

async function getFullImage(url) {
    let image = readFromLS(url);
    if (image.fullImage != null) {
        return image.fullImage;
    } else {
        const data = await fetchSinglePokemon(url);

        console.log(data);
        
        const pokemon = readFromLS(url);
        if (pokemon != null) {
            pokemon.fullImage = data.sprites.other["official-artwork"].front_default;
            writeToLS(url, pokemon);
        } else {
            const img = {
                fullImage: data.sprites.other["official-artwork"].front_default
            };
            writeToLS(url, img);
        }
        console.log(pokemon.fullImage = data.sprites.other["official-artwork"].front_default);
        return data.sprites.other["official-artwork"].front_default;
    }
}

/*
Check a pokemon as obtained
*/
function obtainPokemon(url) {
    const data = readFromLS(url);
    if (data != null) {
        data.obtained = true;
        writeToLS(url, data);
    } else {
        const pokemon = {
            obtained: true
        };
        writeToLS(url, pokemon);
    }
}

function unobtainPokemon(url) {
    const data = readFromLS(url);
    if (data != null) {
        data.obtained = false;
        writeToLS(url, data);
    } else {
        const pokemon = {
            obtained: false
        };
        writeToLS(url, pokemon);
    }
}

/*
Toggle if a pokemon is a favorite
*/
function toggleFavorite(url) {
    const data = readFromLS(url);
    if (data != null) {
        data.favorite = !data.favorite;
        writeToLS(url, data);
    } else {
        const pokemon = {
            favorite: true
        };
        writeToLS(url, pokemon);
    }
}

/*
Check a pokemon as obtained
*/
function isObtained(url) {
    const data = readFromLS(url);
    if (data != null) {
        if (data.obtained) {
            return data.obtained;
        }
        return false;
    }

    return false;
}

function isFavorite(url) {
    const data = readFromLS(url);
    if (data != null) {
        if (data.favorite) {
            return data.favorite;
        }
        return false;
    }

    return false;
}

function getCurrentRegion() {
    return readFromLS("region");
}

export { getPokeInfo, getImage, obtainPokemon, isObtained, unobtainPokemon,
         regions, getCurrentRegion, getFullImage, fetchSinglePokemon, toggleFavorite,
         isFavorite };