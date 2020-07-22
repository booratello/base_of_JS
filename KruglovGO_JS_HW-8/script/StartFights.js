"use strict";

// функция создаёт бойца (объект) с переданными именем и классом,
// если в качестве fighterName приходит не сторка, а объект, то
// новый боец не создаётся
function createFighter (fighterName, fighterType) {
    if (typeof fighterName == "string") {
        let bufferName = fighterName
        fighterName = new fighterType();
        fighterName.name = bufferName;
    }
    return fighterName;
}


// функция проверяет, явлется ли один из пары бойцов победителем одного из предыдущих поединков,
// если да - он вновь отправляется в бой с оставшися с прошлой схватки здоровьем
// чтобы вновь отправить в бой прошлого победителя, у него должны быть те же имя и класс что и ранее
// если боец выходит вновь, он удаляется из этого списка
function isItVeteran (survivors, fighterName, fighterType) {
    survivors.forEach (function(veteran) {
        if (veteran.name == fighterName && veteran.constructor.name == fighterType.name) {
        fighterName = veteran;
        survivors.splice(survivors.indexOf(veteran), 1);
        return fighterName;
        }  
    });
    return fighterName
}

// данная функция срабатывает при нажатии кнопки "бой!"
function StartFight() {
    // выбор всех пар бойцов
    let allFights = document.querySelectorAll("tr");
    // список всех победителей
    let survivors = [];
    
    // для каждой пары выполняются следующие инструкции
    allFights.forEach(function (figth) {
        // поиск и выбор имён и типов бойцов из пары
        let pair_names = figth.querySelectorAll(".fighter_name");
        let pair_types = figth.querySelectorAll(".fighter_type");

        let firstFighter = pair_names[0].value;
        let secondFighter = pair_names[1].value;
        let firstFighterType = analogs[pair_types[0].value];
        let secondFighterType = analogs[pair_types[1].value];
        // поле результата поединка, в котрое возвращается этот самый результат
        let result = figth.querySelector("output");
        // проверка, обоим ли бойцам переданы имена и типы, 
        // если нет, то для жтой пары не будет боя и переходим к следующей, если она есть
        if (firstFighter == "" || secondFighter == "" || firstFighterType == undefined || secondFighterType == undefined) {
            result.value = `Кто-то из бойцов не определился.`;
        }
        else {
            // проверка обоих бойцов, не является ли кто-то из них победителем прошлых боёв
            firstFighter = isItVeteran(survivors, firstFighter, firstFighterType);
            secondFighter = isItVeteran(survivors, secondFighter, secondFighterType);
            // создание новых бойцов - срабатывет, если те не ветераны
            firstFighter = createFighter(firstFighter, firstFighterType);
            secondFighter = createFighter(secondFighter, secondFighterType);
            // определяем победителя, добавляем его в список и выводим результат
            let whoWon = doFight(firstFighter, secondFighter) ? firstFighter : secondFighter;
            survivors.push(whoWon);
            result.value = `Победил ${whoWon.name} с оставшимся здоровьем в ${whoWon.health} ед.`;
        }
    })
};
