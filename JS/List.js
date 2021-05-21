import { getElement } from "../Utils/Elements.js"
import { showDrinks } from "../Utils/DrinksList.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const cardsContainer = getElement(".cardsContainer");
const searchInput = getElement("#searchInput");
const loader = getElement(".lds-ring");
const message = getElement(".message");

searchInput.addEventListener("keyup", function() {
    const searchUrl = URL + this.value;
    showDrinks(searchUrl, message, cardsContainer);
});

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        loader.classList.add("deactivate");
        showDrinks(URL, message, cardsContainer);
    }, 1000);
})

