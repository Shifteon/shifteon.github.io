/*
Features I need:
 - Build a grid
 - Build a detail view 
*/

import { getImage } from "./model.js";


/*
Build the pokedex grid
*/
function buildGrid(pokemonData) {
    console.log(pokemonData);
    const grid = document.querySelector('#pokedex-grid');
    for (const pokemon of pokemonData) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('data-url', pokemon.pokemon_species.url);

        let img = document.createElement('img');
        let content = document.createElement('h2');
        let checkBox = document.createElement('input');

        // temp image
        img.src = "images/pokeball.png";
        
        getImage(pokemon.pokemon_species.url).then(data => {
            img.src = data;
        })

        content.innerText = `#${pokemon.entry_number} ${pokemon.pokemon_species.name}`;

        checkBox.type = "checkbox";
        checkBox.setAttribute('data-url', pokemon.pokemon_species.url);

        gridItem.appendChild(img);
        gridItem.appendChild(content);
        gridItem.appendChild(checkBox);

        grid.appendChild(gridItem);
    }
}

function showOnePokemon(url) {

}

export { buildGrid, showOnePokemon };