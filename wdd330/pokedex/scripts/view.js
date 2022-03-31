/*
Features I need:
 - Build a grid
 - Build a detail view 
*/

import { fetchSinglePokemon, getCurrentRegion, getFullImage, getImage, isFavorite, isObtained, regions } from "./model.js";
import { Pokedex } from "./pokedex.js";

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/*
Build the pokedex grid
*/
function buildGrid(pokemonData, pageNum = 1) {
    console.log(pokemonData);
    const grid = document.querySelector('#pokedex-grid');
    grid.innerHTML = '';
    for (const pokemon of pokemonData.pokemon) {
        const url = pokemon.pokemon_species.url;

        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('data-url', url);

        let img = document.createElement('img');
        let contentBox = document.createElement('div');
        let content = document.createElement('h2');
        let checkBox = document.createElement('input');
        let star = document.createElement('span');

        // temp image
        img.src = "images/pokeball.png";
        img.classList.add('rotate');
        
        getImage(url).then(data => {
            img.src = data;
            img.classList.remove('rotate');
        });

        contentBox.classList.add('content-box');

        // capitalize the pokemon's name
        let name = capitalize(pokemon.pokemon_species.name);

        content.innerText = `#${pokemon.entry_number} ${name}`;

        checkBox.type = "checkbox";
        checkBox.classList.add('obtained-check');
        checkBox.setAttribute('data-url', url);
        if (isObtained(url)) {
            checkBox.checked = true;
        }

        // Make it look like a star
        star.classList.add('fa');
        star.classList.add('fa-star');
        star.setAttribute('data-url', url);
        if (isFavorite(url)) {
            star.classList.add('checked');
        }

        contentBox.appendChild(content);
        contentBox.appendChild(checkBox);
        contentBox.appendChild(star);

        gridItem.appendChild(img);
        gridItem.appendChild(contentBox);

        grid.appendChild(gridItem);
    }

    // create page navigation
    createPageNav(pageNum, pokemonData.numPokemon);
}

function createPageNav(pageNum, numPokemon) {
    const navDiv = document.querySelector('#page-nav');
    navDiv.innerHTML = "";
    const numPages = Math.ceil(numPokemon / 20);
    const links = 5;
    let splitPages = numPages;
    if (numPages > links) {
        splitPages = links;
    }
    let startPage = 1;
    if (pageNum > links) {
        startPage = pageNum - (pageNum % links);
        splitPages = parseInt(startPage) + links;
        if (splitPages > numPages) {
            splitPages = numPages
        }
    }

    if (pageNum != 1) {
        let beginningArrow = document.createElement('a');
        beginningArrow.href = `index.html?page=${1}`;
        beginningArrow.innerText = "<<";
        navDiv.appendChild(beginningArrow);

        let previousArrow = document.createElement('a');
        previousArrow.href = `index.html?page=${pageNum - 1}`;
        previousArrow.innerText = "<";
        navDiv.appendChild(previousArrow);
    } 

    for (let i = startPage; i <= splitPages; i++) {
        let pageLink = document.createElement('a');
        pageLink.href = `index.html?page=${i}`;
        pageLink.innerText = i;
        navDiv.appendChild(pageLink);
    }

    if (pageNum != numPages) {
        let nextArrow = document.createElement('a');
        nextArrow.href = `index.html?page=${parseInt(pageNum) + 1}`;
        nextArrow.innerText = ">";
        navDiv.appendChild(nextArrow);

        let endArrow = document.createElement('a');
        endArrow.href = `index.html?page=${numPages}`;
        endArrow.innerText = ">>";
        navDiv.appendChild(endArrow);
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
    // so the pokeball rotates
    image.classList.add('rotate');
    setTimeout(() => {
        getFullImage(url).then(data => {
            image.classList.remove('rotate');
            image.src = data;
        });
    }, 500);

    parent.appendChild(image);

    fetchSinglePokemon(url).then(data => {
        const name = capitalize(data.name);
        const types = data.types;
        const abilities = data.abilities;
        const stats = data.stats;

        const content = document.createElement('div');
        content.id = "poke-content";

        let span = `<span class="fa fa-star" data-url="${url}"></span>`;
        if (isFavorite(url))
            span = `<span class="fa fa-star checked" data-url="${url}"></span>`;
        content.innerHTML = `
            <div id="poke-header">
                <h1>${name}</h1>
                ${span}
            </div>`;


        const section1 = document.createElement('div');

        // types section
        const typeLabel = document.createElement('h2');
        typeLabel.textContent = "Type(s):";
        section1.appendChild(typeLabel);
        const typeBox = document.createElement('div');
        typeBox.classList.add('content-box');
        for (let type of types) {
            const text = document.createElement('span');
            text.textContent = capitalize(type.type.name) + " ";
            typeBox.appendChild(text);
        }
        section1.appendChild(typeBox);

        // abilities
        const abilityLabel = document.createElement('h2');
        abilityLabel.textContent = "Abilities:";
        section1.appendChild(abilityLabel);
        const abilityBox = document.createElement('div');
        abilityBox.classList.add('content-box');
        for (let ability of abilities) {
            const text = document.createElement('span');
            text.textContent = capitalize(ability.ability.name) + " ";
            abilityBox.appendChild(text);
        }
        section1.appendChild(abilityBox);

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.classList.add('obtained-check');
        checkBox.setAttribute('data-url', url);
        if (isObtained(url)) {
            checkBox.checked = true;
        }
        section1.appendChild(checkBox);

        content.appendChild(section1);

        const section2 = document.createElement('div');

        // stats
        const statsLabel = document.createElement('h2');
        statsLabel.classList.add('stats');
        statsLabel.textContent = "Stats:";
        section2.appendChild(statsLabel);
        const statsBox = document.createElement('div');
        statsBox.classList.add('content-box');
        statsBox.classList.add('stats');
        let total = 0;
        for (let stat of stats) {
            const text = document.createElement('p');
            text.textContent = capitalize(stat.stat.name) + ": " + stat.base_stat;
            statsBox.appendChild(text);
            total += stat.base_stat;
        }
        const text = document.createElement('p');
        text.textContent = "Total: " + total;
        statsBox.appendChild(text);
        section2.appendChild(statsBox);

        content.appendChild(section2);

        parent.appendChild(content);

        // add the event listners for stars and checkboxes
        Pokedex.addEventListeners();
    });
}

export { buildGrid, showOnePokemon, buildRegionSelect };