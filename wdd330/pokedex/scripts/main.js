import { getPokeInfo } from "./model.js";

const pokeInfo = getPokeInfo();

function buildDex(data) {
    const parent = document.getElementById("pokedex");
    const pokemonData = data.pokemon_entries;
    
    for (const pokemon of pokemonData) {
        console.log(pokemon);
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>Name: ${pokemon.pokemon_species.name}</h2>`;

        console.log()

        parent.appendChild(li);
    }
}


console.log(pokeInfo);
buildDex(pokeInfo);