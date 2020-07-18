"use strict"

// функция создаёт новую армию и добавляет в неёбойцов по переданным параметрам
function buildArmy (countArmyFighters, armyFightersTypes) {
    let counters = document.querySelectorAll(`.${countArmyFighters}`);
    let types = document.querySelectorAll(`.${armyFightersTypes}`);
    
    let newArmy = new Army();
    
    for (let i = 0; i < counters.length; i++) {
        let count = +counters[i].value;
        let type = analogs[types[i].value];
        if (isNaN(count) == false && count > 0 && Number.isInteger(count) && type != undefined) {
            newArmy.doAddUnits(type, count);
        }
    }
    
    return newArmy;
};


// в функций создвются 2 армии, объект сражения, опрелеляется победивщая армия и 
// выводится соответствующее уведомление в результатах 
function StartBattle() {

    let firstArmy = buildArmy("count_first_army_fighters", "first_army_fighters_types");
    let secondArmy = buildArmy("count_second_army_fighters", "second_army_fighters_types");

    let firstArmyName = document.querySelector(".first_army_name").value;
    firstArmyName = firstArmyName == "" ? "Первая армия" : firstArmyName;
    let secondArmyName = document.querySelector(".second_army_name").value;
    secondArmyName = secondArmyName == "" ? "Вторая армия" : secondArmyName;
    
    battle = new Battle();
    let buttleResult = battle.doBattle(firstArmy, secondArmy);
    
    let result = document.querySelector("output");
    
    if (typeof buttleResult != "string") {
        result.value = `${buttleResult ? firstArmyName : secondArmyName}, осталось бойцов: 
                        ${buttleResult ? firstArmy.units.length : secondArmy.units.length}.`;
    }
    else {
        result.value = buttleResult;
    };
};
