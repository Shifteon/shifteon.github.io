import { showOnePokemon } from "./view.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const url = "https://pokeapi.co/api/v2/" + urlParams.get('url');
console.log(url);

showOnePokemon(url);