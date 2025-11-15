import Pokemon from "./modules/pokemon.js";
import { getRandom } from "./modules/utils.js";

// Створюємо двох покемонів через один клас
const player1 = new Pokemon({
    name: "Pikachu",
    hp: 120,
    type: "electric",
    selectors: {
        hp: "#player1-hp",
        progressbar: "#player1-progress",
        name: "#player1-name"
    }
});

const player2 = new Pokemon({
    name: "Charmander",
    hp: 100,
    type: "fire",
    selectors: {
        hp: "#player2-hp",
        progressbar: "#player2-progress",
        name: "#player2-name"
    }
});

// Кнопки
document.querySelector("#btn-attack").addEventListener("click", () => {
    const damage = getRandom(20);
    player2.changeHP(damage);

    if (player2.hp.current === 0) {
        alert(player1.name + " виграв!");
    }
});

document.querySelector("#btn-enemy").addEventListener("click", () => {
    const damage = getRandom(15);
    player1.changeHP(damage);

    if (player1.hp.current === 0) {
        alert(player2.name + " виграв!");
    }
});

document.querySelector("#btn-newgame").addEventListener("click", () => {
    // Скидання HP без перезавантаження сторінки
    player1.resetHP();
    player2.resetHP();
    const logBox = document.querySelector("#logs");
    logBox.innerHTML = '';
});
