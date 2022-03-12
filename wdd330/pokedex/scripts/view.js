/*
Features I need:
 - Build a grid
 - Build a detail view 
*/

import { getImage } from "./model.js";

function buildGrid(pokemonData) {
    console.log(pokemonData);
    const grid = document.querySelector('#pokedex-grid');
    for (const pokemon of pokemonData) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        let img = document.createElement('img');
        let content = document.createElement('h2');

        img.src = getImage(pokemon.pokemon_species.url);

        content.innerText = `#${pokemon.entry_number} ${pokemon.pokemon_species.name}`;
        gridItem.appendChild(img);
        gridItem.appendChild(content);

        grid.appendChild(gridItem);
    }
}

export { buildGrid };