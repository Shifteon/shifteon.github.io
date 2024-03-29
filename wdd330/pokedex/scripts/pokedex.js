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
  original-alola
  galar
*/

import { readFromLS, writeToLS } from "./ls.js";
import { getPokeInfo, obtainPokemon, isObtained, unobtainPokemon, toggleFavorite } from "./model.js";
import { buildGrid } from "./view.js";

class Pokedex
{
    constructor(region = null) {
        if (region != null) {
            this.region = region;
        } else {
            let region = readFromLS("region");
            if (region != null) {
                this.region = region;
            } else {
                this.region = "kanto";
            }
        }
        
    }

    buildDex = (filter="NONE", pageNum=1) => {
        getPokeInfo(this.region, filter, pageNum)
        .then(data => {
            this.info = data;
            const pokemonData = this.info;
            buildGrid(pokemonData, pageNum);

            // add an event listener to each pokemon
            const pokemon = Array.from(document.querySelector('#pokedex-grid').children);
            pokemon.forEach(mon => {
                mon.addEventListener('click', e => {
                    const url = e.currentTarget.dataset.url.split('/v2/');
                    window.location.href = "pokemon.html?url=" + url[1];
                    return;
                });
            });
            // add event listners to checkboxes and stars
            Pokedex.addEventListeners();
        });
    };

    changeRegion = region => {
        this.region = region;
        writeToLS("region", region);
    };

    static addEventListeners() {
        // console.log("hi");
        const checkBoxes = document.querySelectorAll('.obtained-check');
        // console.log(checkBoxes);
        checkBoxes.forEach(box => {
            box.addEventListener('click', e => {
                if (isObtained(e.currentTarget.dataset.url)) {
                    unobtainPokemon(e.currentTarget.dataset.url);
                } else {
                    obtainPokemon(e.currentTarget.dataset.url);
                }
                document.querySelector('.loader').classList.toggle('display');
                // this is to have an animation to show it is saving
                setTimeout(() => {
                    document.querySelector('.loader').classList.toggle('display');
                    document.querySelector('.fa.fa-check').classList.toggle('display');

                    // for the check
                    setTimeout(() => {
                        document.querySelector('.fa.fa-check').classList.toggle('display');
                    }, 1000);
                }, 1000);
                e.stopPropagation();
            });
        });

        const stars = document.querySelectorAll('.fa.fa-star');
        stars.forEach(star => {
            star.addEventListener('click', e => {
                star.classList.toggle('checked');
                toggleFavorite(e.currentTarget.dataset.url);
                document.querySelector('.loader').classList.toggle('display');
                // this is to have an animation to show it is saving
                setTimeout(() => {
                    document.querySelector('.loader').classList.toggle('display');
                    document.querySelector('.fa.fa-check').classList.toggle('display');

                    // for the check
                    setTimeout(() => {
                        document.querySelector('.fa.fa-check').classList.toggle('display');
                    }, 1000);
                }, 1000);
                e.stopPropagation();
            });
        });
    };

}

export { Pokedex };