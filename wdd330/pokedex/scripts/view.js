/*
Features I need:
 - Build a grid
 - Build a detail view 
*/

import { getImage, isObtained } from "./model.js";


/*
Build the pokedex grid
*/
function buildGrid(pokemonData) {
    console.log(pokemonData);
    const grid = document.querySelector('#pokedex-grid');
    grid.innerHTML = '';
    for (const pokemon of pokemonData) {
        const url = pokemon.pokemon_species.url;

        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('data-url', url);

        let img = document.createElement('img');
        let content = document.createElement('h2');
        let checkBox = document.createElement('input');

        // temp image
        img.src = "images/pokeball.png";
        
        getImage(url).then(data => {
            img.src = data;
        })

        content.innerText = `#${pokemon.entry_number} ${pokemon.pokemon_species.name}`;

        checkBox.type = "checkbox";
        checkBox.setAttribute('data-url', url);
        if (isObtained(url)) {
            checkBox.checked = true;
        }

        gridItem.appendChild(img);
        gridItem.appendChild(content);
        gridItem.appendChild(checkBox);

        grid.appendChild(gridItem);
    }
}

function showOnePokemon(url) {

}

export { buildGrid, showOnePokemon };