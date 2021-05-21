import { getDrinkId, removeDrinkId } from "./LocalStorageFunc.js";

class DrinkDetails {
    constructor(name, ingredients, measures, desc, image) {
        this.name = name,
            this.ingredients = ingredients,
            this.measures = measures,
            this.desc = desc,
            this.image = image
    }
}

async function getDrinkData() {
    const urlDetail = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getDrinkId()}`;
    removeDrinkId();
    return await fetch(urlDetail)
        .then(res => res.json())
        .then(drink => drink.drinks[0]);
}

async function getDrinkDetails() {
    const { strDrink: name, strInstructions: desc, strDrinkThumb: image, strIngredient1: ing1, strIngredient2: ing2,
        strIngredient3: ing3, strIngredient4: ing4, strIngredient5: ing5, strIngredient6: ing6, strIngredient7: ing7,
        strIngredient8: ing8, strIngredient9: ing9, strIngredient10: ing10, strIngredient11: ing11, strIngredient12: ing12,
        strIngredient13: ing13, strIngredient14: ing14, strIngredient15: ing15, strMeasure1: mea1, strMeasure2: mea2,
        strMeasure3: mea3, strMeasure4: mea4, strMeasure5: mea5, strMeasure6: mea6, strMeasure7: mea7, strMeasure8: mea8,
        strMeasure9: mea9, strMeasure10: mea10, strMeasure11: mea11, strMeasure12: mea12,
        strMeasure13: mea13, strMeasure14: mea14, strMeasure15: mea15 } = await getDrinkData();
    const arrIngs = initIngredientsArr(ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9, ing10, ing11, ing12, ing13, ing14, ing15);
    const arrMeas = initMeasuresArr(mea1, mea2, mea3, mea4, mea5, mea6, mea7, mea8, mea9, mea10, mea11, mea12, mea13, mea14, mea15);
    return new DrinkDetails(name, arrIngs, arrMeas, desc, image);
}

function initIngredientsArr(ing1, ing2, ing3,
    ing4, ing5, ing6,
    ing7, ing8, ing9,
    ing10, ing11, ing12,
    ing13, ing14, ing15) {
    const arrIng = [];

    if (ing1 != null) {
        arrIng.push(ing1);
    }
    if (ing2 != null) {
        arrIng.push(ing2);
    }
    if (ing3 != null) {
        arrIng.push(ing3);
    }
    if (ing4 != null) {
        arrIng.push(ing4);
    }
    if (ing5 != null) {
        arrIng.push(ing5);
    }
    if (ing6 != null) {
        arrIng.push(ing6);
    }
    if (ing7 != null) {
        arrIng.push(ing7);
    }
    if (ing8 != null) {
        arrIng.push(ing8);
    }
    if (ing9 != null) {
        arrIng.push(ing9);
    }
    if (ing10 != null) {
        arrIng.push(ing10);
    }
    if (ing11 != null) {
        arrIng.push(ing11);
    }
    if (ing12 != null) {
        arrIng.push(ing12);
    }
    if (ing13 != null) {
        arrIng.push(ing13);
    }
    if (ing14 != null) {
        arrIng.push(ing14);
    }
    if (ing15 != null) {
        arrIng.push(ing15);
    }

    return arrIng;
}

function initMeasuresArr(mea1, mea2, mea3,
    mea4, mea5, mea6,
    mea7, mea8, mea9,
    mea10, mea11, mea12,
    mea13, mea14, mea15) {
    const arrMea = [];

    if (mea1 != null) {
        arrMea.push(mea1);
    }
    if (mea2 != null) {
        arrMea.push(mea2);
    }
    if (mea3 != null) {
        arrMea.push(mea3);
    }
    if (mea4 != null) {
        arrMea.push(mea4);
    }
    if (mea5 != null) {
        arrMea.push(mea5);
    }
    if (mea6 != null) {
        arrMea.push(mea6);
    }
    if (mea7 != null) {
        arrMea.push(mea7);
    }
    if (mea8 != null) {
        arrMea.push(mea8);
    }
    if (mea9 != null) {
        arrMea.push(mea9);
    }
    if (mea10 != null) {
        arrMea.push(mea10);
    }
    if (mea11 != null) {
        arrMea.push(mea11);
    }
    if (mea12 != null) {
        arrMea.push(mea12);
    }
    if (mea13 != null) {
        arrMea.push(mea13);
    }
    if (mea14 != null) {
        arrMea.push(mea14);
    }
    if (mea15 != null) {
        arrMea.push(mea15);
    }

    return arrMea;
}

function setIngsList(ingredientsList, measures) {
    const ings = [];
    if (ingredientsList[0] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[0]} <span class="measure">${measures[0] ? measures[0] : ""}</span></li>`
        )
    }
    if (ingredientsList[1] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[1]} <span class="measure">${measures[1] ? measures[1] : ""}</span></li>`
        )
    }
    if (ingredientsList[2] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[2]} <span class="measure">${measures[2] ? measures[2] : ""}</span></li>`
        )
    }
    if (ingredientsList[3] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[3]} <span class="measure">${measures[3] ? measures[3] : ""}</span></li>`
        )
    }
    if (ingredientsList[4] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[4]} <span class="measure">${measures[4] ? measures[4] : ""}</span></li>`
        )
    }
    if (ingredientsList[5] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[5]} <span class="measure">${measures[5] ? measures[5] : ""}</span></li>`
        )
    }
    if (ingredientsList[6] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[6]} <span class="measure">${measures[6] ? measures[6] : ""}</span></li>`
        )
    }
    if (ingredientsList[7] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[7]} <span class="measure">${measures[7] ? measures[7] : ""}</span></li>`
        )
    }
    if (ingredientsList[8] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[8]} <span class="measure">${measures[8] ? measures[8] : ""}</span></li>`
        )
    }
    if (ingredientsList[9] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[9]} <span class="measure">${measures[9] ? measures[9] : ""}</span></li>`
        )
    }
    if (ingredientsList[10] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[10]} <span class="measure">${measures[10] ? measures[10] : ""}</span></li>`
        )
    }
    if (ingredientsList[11] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[11]} <span class="measure">${measures[11] ? measures[11] : ""}</span></li>`
        )
    }
    if (ingredientsList[12] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[12]} <span class="measure">${measures[12] ? measures[12] : ""}</span></li>`
        )
    }
    if (ingredientsList[13] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[13]} <span class="measure">${measures[13] ? measures[13] : ""}</span></li>`
        )
    }
    if (ingredientsList[14] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[14]} <span class="measure">${measures[14] ? measures[14] : ""}</span></li>`
        )
    }
    if (ingredientsList[15] !== undefined) {
        ings.push(
            `<li class="ingredient"> <i class="fas fa-plus icon"></i> ${ingredientsList[15]} <span class="measure">${measures[15] ? measures[15] : ""}</span></li>`
        )
    }

    return ings.join("");
}

export async function displayDrinkDetails(
    image,
    desc,
    ingredientsList,
    name,
    loader,
    imageContainer,
    detailsContainer
) {
    setTimeout(() => {
        loader.classList.add("hidden");
        imageContainer.classList.remove("hidden");
        detailsContainer.classList.remove("hidden");
    }, 1000)
    const drinkDetails = await getDrinkDetails();
    image.src = drinkDetails.image;
    desc.textContent = drinkDetails.desc;
    ingredientsList.innerHTML = setIngsList(drinkDetails.ingredients, drinkDetails.measures);
    name.textContent = drinkDetails.name;
}