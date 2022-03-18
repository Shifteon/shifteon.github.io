import { Pokedex } from "./pokedex.js";

// localStorage.clear();

const pokedex = new Pokedex();

pokedex.buildDex();

// TODO: remember current region
const regions = document.querySelector('#region');

regions.addEventListener('change', e => {
    pokedex.region = e.target.value;
    pokedex.buildDex();
});

