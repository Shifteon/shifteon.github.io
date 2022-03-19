import { Pokedex } from "./pokedex.js";
import { buildRegionSelect } from "./view.js";

// localStorage.clear();

const pokedex = new Pokedex();

pokedex.buildDex();

buildRegionSelect(document.querySelector('#region-select'));

const regions = document.querySelector('#region');

regions.addEventListener('change', e => {
    pokedex.changeRegion(e.target.value);
    pokedex.buildDex();
});