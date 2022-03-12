import { getPokeInfo } from "./model.js";
import { buildGrid } from "./view.js";

const pokeInfo = getPokeInfo("kanto");

function buildDex(data) {
    // const parent = document.getElementById("pokedex");
    const pokemonData = data.pokemon_entries;
    
    // for (const pokemon of pokemonData) {
    //     console.log(pokemon);
    //     const li = document.createElement('li');
    //     li.innerHTML = `
    //     <h2>Name: ${pokemon.pokemon_species.name}</h2>`;

    //     parent.appendChild(li);
    // }
    buildGrid(pokemonData);
}


console.log(pokeInfo);
buildDex(pokeInfo);