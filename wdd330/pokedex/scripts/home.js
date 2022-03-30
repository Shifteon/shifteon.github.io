import { Pokedex } from "./pokedex.js";
import { buildRegionSelect } from "./view.js";

// localStorage.clear();

const pokedex = new Pokedex();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("page")) {
    pokedex.buildDex("NONE", urlParams.get("page"))
} else {
    pokedex.buildDex();
}

buildRegionSelect(document.querySelector('#region-select'));

const regions = document.querySelector('#region');

regions.addEventListener('change', e => {
    pokedex.changeRegion(e.target.value);
    pokedex.buildDex();
});

const filterBtn = document.querySelector('#filter');
filterBtn.addEventListener('click', () => {
    const filterBox = document.querySelector('#filter-box');
    filterBox.classList.toggle('display');
});

const filters = document.querySelectorAll('.filter-option');

filters.forEach(filter => {
    filter.addEventListener('click', e => {
        console.log(e.currentTarget.innerText);
        pokedex.buildDex(e.currentTarget.innerText.toLowerCase());
    });
});