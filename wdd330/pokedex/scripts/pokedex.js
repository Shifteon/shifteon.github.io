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
  galar
*/

import { getPokeInfo, obtainPokemon, isObtained, unobtainPokemon } from "./model.js";
import { buildGrid } from "./view.js";

class Pokedex
{
    constructor(region = "hoenn") {
        this.region = region;
    }

    buildDex = () => {
        getPokeInfo(this.region)
        .then(data => {
            this.info = data;
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
                    if (isObtained(e.currentTarget.dataset.url)) {
                        this.unCheck(e.currentTarget.dataset.url);
                    } else {
                        this.check(e.currentTarget.dataset.url);
                    }
                    e.stopPropagation();
                });
            });
        });
    };

    check = url => {
        obtainPokemon(url);
    };

    unCheck = url => {
        unobtainPokemon(url);
    };

}

export { Pokedex };