/*
Features I need:
 - Display all Pokemon
 - Display a single Pokemon
 - Check a Pokemon as obtained
 - Filter Pokemon by possesion

 Region Endpoints:
 https://pokeapi.co/api/v2/pokedex/
  kanto
  original-johto
  hoenn
  original-sinnoh
  original-unova
  kalos-central
  kalos-costal
  kalos-mountain
  Original Alola
  Galar
*/

import { getPokeInfo } from "./model.js";
import { buildGrid } from "./view.js";

class Pokedex
{
    constructor(region = "hoenn") {
        this.region = region;
        this.info = getPokeInfo(this.region);
    }

    buildDex = () => {
        const pokemonData = this.info.pokemon_entries;
        buildGrid(pokemonData);

        // add an event listener to each pokemon
        const pokemon = Array.from(document.querySelector('#pokedex-grid').children);
        pokemon.forEach(mon => {
            mon.addEventListener('click', e => {
                // alert(e.currentTarget.dataset.url);
                return;
            });
        });
        const checkBoxes = document.querySelectorAll('.grid-item input');
        checkBoxes.forEach(box => {
            box.addEventListener('click', e => {
                this.check(e.currentTarget.dataset.url);
                e.stopPropagation();
            });
        });
    };

    check = url => {
        
    };

}

export { Pokedex };