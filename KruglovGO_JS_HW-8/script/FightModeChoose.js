"use strict";

const choose = `
    <input type="radio" name="fight_mode" class="fight"> <label for="fight">Бои "один на один"</label>
    <input type="radio" name="fight_mode" class="battle"> <label for="battle">Сражение двух армий</label>
`
document.body.insertAdjacentHTML("afterbegin", choose);

const fightMode =  document.querySelector(".fight");
const battleMode =  document.querySelector(".battle");

fightMode.addEventListener("click", function() {
    if (!document.querySelector(".fight_table")) {
        fightModeOn()
    }
    if (document.querySelector(".battle_table")) {
        battleModeOff()
    } 
});
battleMode.addEventListener("click", function() { 
    if (document.querySelector(".fight_table")) {
        fightModeOff();
    }
    if (!document.querySelector(".battle_table")) {
        battleModeOn()
    } 
});

// объект аналогов между названием типа бойцов на русскои и соответствующих им классов Warriors
let analogs = {
    "Воин": Warrior
    , "Рыцарь": Knight
    , "Защитник": Defender
    , "Вампир": Vampire
    , "Копейщик": Lancer
    , "Целитель": Healer
};