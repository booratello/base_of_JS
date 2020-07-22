// Функция создаёт и добавляет на страницу строку для выбора новой пары бойцов
function battleModeOn() {
    document.body.style.backgroundImage = "url(img/battle.jpg) "
    // создание описания режима
    let description = `<div class="battle_note">В данном режиме можно проводить поединки между армиями.
                       Бойцы в армию добавляются отрядами одного типа. Сражаются первые 
                       бойцы армий, после их гибели приходят следующие в очереди. Неверно сформированные отряды не будут учитываться.</div>`
    
    document.body.insertAdjacentHTML("beforeend", description);

    // создание основной таблицы для сражений
    let battleTable =  `<table class="battle_table">
                            <tr class="header">
                                <th><input type="text" placeholder="Первая армия" class="first_army_name"></th>
                                <th> против </th>
                                <th><input type="text" placeholder="Вторая армия" class="second_army_name"></th>
                            </tr>
                            <tr class="footer">
                                <th colspan="3">
                                    <span> Победитель в битве: </span>
                                    <output> Армии готовятся </output>
                                </th>
                            </tr>
                        </table>`
    
    document.body.insertAdjacentHTML("beforeend", battleTable);
    
    // функция добавляет в таблицу новую строку с формами для добавленеия нового отряда бойцов    
    function addSquad() {
        
        let squadRow = `
            <tr>
                <td>
                    <select class="fighter_type first_army_fighters_types">
                        <option disabled selected hidden>Тип бойцов</option>
                        <option>Воин</option>
                        <option>Рыцарь</option>
                        <option>Защитник</option>
                        <option>Вампир</option>
                        <option>Копейщик</option>
                        <option>Целитель</option>
                    </select>
                    <input type="text" placeholder="Количество" class="count_first_army_fighters">
                </td>
                <td></td>
                <td>          
                    <select class="fighter_type second_army_fighters_types">
                        <option disabled selected hidden>Тип бойцов</option>
                        <option>Воин</option>
                        <option>Рыцарь</option>
                        <option>Защитник</option>
                        <option>Вампир</option>
                        <option>Копейщик</option>
                        <option>Целитель</option>
                    </select>
                    <input type="text" placeholder="Количество" class="count_second_army_fighters">
                </td>
            </tr>
            `;
        let tableFooter = document.querySelector(".footer");
        tableFooter.insertAdjacentHTML("beforebegin", squadRow);
    }
        
    // Создание и добавление кнопки, позволяющей добавить новые пары бойцов
    battleTable = document.querySelector(".battle_table");

    let btnForAddRow = "<button class=\"new_battle\"> Добавить бойцов </button>";
    battleTable.insertAdjacentHTML("beforebegin", btnForAddRow);
    btnForAddRow = document.querySelector(".new_battle");

    btnForAddRow.addEventListener("click", function () {
        addSquad();
    });

    // Добавление первых отрядов бойцов
    addSquad();

    // Создание и добавление кнопки, запускающей все поединки
    let btnForStartBattle = "<button class=\"start_battle\"> Бой! </button>";
    battleTable.insertAdjacentHTML("afterend", btnForStartBattle);
    btnForStartBattle = document.querySelector(".start_battle");

    btnForStartBattle.addEventListener("click", StartBattle)
}

function battleModeOff() {
    document.querySelector(".battle_note").remove();
    document.querySelector(".battle_table").remove();
    document.querySelector(".new_battle").remove();
    document.querySelector(".start_battle").remove();
}
