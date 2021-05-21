import {setDrinkId} from "./LocalStorageFunc.js";

export class DrinkList {
    constructor(id, name, image) {
        this.id = id,
        this.name = name,
        this.image = image
    }
}

async function getDrinks(URL) {
    return await fetch(URL)
        .then(res => res.json())
        .then(json => json.drinks);
}

export function showDrinks(URL, message, cardsContainer) {
    message.classList.remove("show");
    getDrinks(URL).then(drinks => {
        const drinksList = [];
        if (drinks === null) {
            message.textContent = "Sorry we can't find your drink :(";
            message.classList.add("show");
            cardsContainer.innerHTML = "";
        }
        else {
            drinks.forEach(d => {
                const { idDrink:id, strDrink: name, strDrinkThumb: image } = d;
                const drink = new DrinkList(id, name, image);
                drinksList.push(drink);
            });
            const htmlEles = drinksList.map(drinkList => {
                return `<a href="./DrinkDetails.html">
                    <div class="card" data-id = "${drinkList.id}"}>
                        <div class="imageContainer">
                            <img src="${drinkList.image}" alt="" class="image">
                            <h1 class="cardTitle">${drinkList.name}</h1>
                        </div>
                    </div>
                </a>`
            }).sort().join("");
            cardsContainer.innerHTML = htmlEles;
        }
        cardsContainer.querySelectorAll(".card")
            .forEach(ele => {
                ele.addEventListener("click", function () {
                    setDrinkId(this.dataset.id);
                });
            });
    });
}