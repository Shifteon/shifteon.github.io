/*
Features I need:
 - Build a grid
 - Build a detail view 
*/

import { readFromLS } from "./ls.js";
import { getCurrentRegion, getFullImage, getImage, isObtained, regions } from "./model.js";


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

function buildRegionSelect(parent) {
    const select = document.createElement('select');
    select.id = "region";
    for (let region of regions) {
        const option = document.createElement('option');
        option.value = region.value;
        option.innerText = region.name;

        if (getCurrentRegion() == region.value) {
            option.selected = true;
        }

        select.appendChild(option);
    }

    parent.appendChild(select);
}

function showOnePokemon(url) {
    const parent = document.querySelector('#poke-info');

    const image = document.createElement('img');
    // temp image
    image.src = "images/pokeball.png";
    getFullImage(url).then(data => {
        image.src = data;
    });

    parent.appendChild(image);
}

export { buildGrid, showOnePokemon, buildRegionSelect };