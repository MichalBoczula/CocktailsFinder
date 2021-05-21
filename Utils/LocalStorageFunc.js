export function getDrinkId() {
    return localStorage.getItem("drinkId");
}

export function setDrinkId(drinkId) {
    return localStorage.setItem("drinkId", drinkId);
}

export function removeDrinkId() {
    return localStorage.removeItem("drinkId");
}