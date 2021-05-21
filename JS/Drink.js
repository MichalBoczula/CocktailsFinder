import { displayDrinkDetails } from "../Utils/DrinkDetails.js";
import { getElement } from "../Utils/Elements.js"

const image = getElement("#image");
const desc = getElement("#desc")
const ingredientsList = getElement("#ingredientsList");
const name = getElement("#name");
const loader = getElement("#loader");
const imageContainer = getElement(".imageContainer");
const detailsContainer = getElement(".detailsContainer");

await displayDrinkDetails(image, desc, ingredientsList, name, loader, imageContainer, detailsContainer);