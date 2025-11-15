import { addLog } from "./logger.js";

export default class Pokemon {
    constructor({ name, hp, type, selectors }) {
        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;

        this.elHP = document.querySelector(selectors.hp);
        this.elProgressbar = document.querySelector(selectors.progressbar);
        if (selectors.name) {
            const elName = document.querySelector(selectors.name);
            if (elName) elName.innerText = this.name;
        }

        this.renderHP();
        addLog(`${this.name} створений (HP: ${this.hp.total})`);
    }

    changeHP(amount) {
        const prev = this.hp.current;
        this.hp.current -= amount;
        if (this.hp.current < 0) this.hp.current = 0;

        this.renderHP();

        addLog(`${this.name} отримав ${amount} dmg ( ${prev} → ${this.hp.current} )`);

        return this.hp.current;
    }

    renderHP() {
        if (this.elHP) this.elHP.innerText = `${this.hp.current} / ${this.hp.total}`;
        if (this.elProgressbar) this.elProgressbar.style.width = (this.hp.current / this.hp.total) * 100 + "%";
    }

    resetHP() {
        this.hp.current = this.hp.total;
        this.renderHP();
        addLog(`${this.name} відновився до повного HP`);
    }
}
