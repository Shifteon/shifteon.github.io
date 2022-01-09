// www.themealdb.com/api/json/v1/1/random.php
async function getRecipe() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";


    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No meals found " + response.status);
    }
}

function newRecipe() {
    const recipe_id = document.querySelector('#recipes');

    const r = getRecipe()
    .then(function(rec) {
        console.log(rec);
        myRecipe = rec['meals'][0];
        let card = document.createElement("section");

        let ul = document.createElement("ul");

        for (let i = 1; i <= 20; i++) {
            tmp = myRecipe['strIngredient'+i];
            if (tmp != "" && tmp != null) {
                let li = document.createElement("li");
                let text = document.createTextNode(tmp);
                li.appendChild(text);
                ul.appendChild(li);
            }
        }

        card.innerHTML = `<h2>${myRecipe.strMeal}</h2>
        <img src="${myRecipe.strMealThumb}" alt="${myRecipe.strMeal}">
        <p>${myRecipe.strInstructions}</p>
        `;
        card.appendChild(ul);
        recipe_id.appendChild(card);
    });
}