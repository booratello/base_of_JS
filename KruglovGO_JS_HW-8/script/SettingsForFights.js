// Формирование условий для сражений 1 на 1.

"use strict";

// Функция создаёт и добавляет на страницу строку для выбора новой пары бойцов
function fightModeOn() {
    document.body.style.backgroundImage = "url(img/fight.jpg)"
    // создание описания режима
    let description = `<div class="fight_note">В данном режиме можно проводить поединки между выбранными бойцами.
                        Можно после боя добавлять новый поединок и отправлять на него победителя одного из прошлых 
                        боёв (его имя и тип должны совпадать).</div>`
    document.body.insertAdjacentHTML("beforeend", description);

    // создание основной таблицы для боёв
    document.body.insertAdjacentHTML("beforeend", `<table class="fight_table"></table>`);
    
    // функция добавляет в таблицу новую строку с формами для создания пары бойцов    
    function addRivals() {
        const typesOfFighters = `        
            <select class="fighter_type">
                <option disabled selected hidden>Тип бойца</option>
                <option>Воин</option>
                <option>Рыцарь</option>
                <option>Защитник</option>
                <option>Вампир</option>
                <option>Копейщик</option>
            </select>
            `;
        let rivalsRow = `
            <tr>
                <td><input type="text" placeholder="Имя бойца" class="fighter_name"></td>
                <td>${typesOfFighters}</td>
                <td><span> против </span></td>
                <td><input type="text" placeholder="Имя бойца" class="fighter_name"></td>
                <td>${typesOfFighters}</td>
                <td><span> Результат поединка: </span></td>
                <td><output> Бойцы готовятся </output></td>
            </tr>
            `;
        fightTable.insertAdjacentHTML("beforeend", rivalsRow);
    }
        
    // Создание и добавление кнопки, позволяющей добавить новые пары бойцов
    let fightTable = document.querySelector(".fight_table");

    let btnForAddRow = "<button class=\"new_fight\"> Добавить поединок </button>";
    fightTable.insertAdjacentHTML("beforebegin", btnForAddRow);
    btnForAddRow = document.querySelector(".new_fight");

    btnForAddRow.addEventListener("click", function () {
        addRivals();
    });

    // Добавление первой пары бойцов
    addRivals();

    // Создание и добавление кнопки, запускающей все поединки
    let btnForStartFight = "<button class=\"start_fight\"> Бой! </button>";
    fightTable.insertAdjacentHTML("afterend", btnForStartFight);
    btnForStartFight = document.querySelector(".start_fight");

    btnForStartFight.addEventListener("click", StartFight)
}

function fightModeOff() {
    document.querySelector(".fight_note").remove();
    document.querySelector(".fight_table").remove();
    document.querySelector(".new_fight").remove();
    document.querySelector(".start_fight").remove();
}
