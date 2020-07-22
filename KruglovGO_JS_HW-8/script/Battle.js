// Данная функция применяется для боёв армиями, каждый ход (итерацию циклв while) меняя роли этих армий - 
// атакующая и защищающаяся - пока не погибнут все бойцы одной из них. Бои идут 1 на 1, но возможно 
// влияние на соседних бойцов - учитываются все методы и атрибуты классов бойцов.
// На место погибшего встаёт следующий в очереди.
// Результатом является проверка, больше ли нуля численность первой армии - если да, то она и победила,
// если нет, то вторая армия. Учтён вариант, если сражающимися бойцами окажутся целители.

"use strict";

class Battle {
    doBattle (army1, army2) {
        while (army1.units.length !== 0 && army2.units.length !== 0) {
            let attackingArmy = army1;
            let defendingArmy = army2;
            
            while (true) {
                let attackingUnit = attackingArmy.units[0];
                let defendingUnit = defendingArmy.units[0];
                
                if (attackingUnit instanceof Healer && defendingUnit instanceof Healer) {
                    return "Целители враждующих армий общаются, остальные терпеливо ждут."
                };
                
                let damage = attackingUnit.attack > defendingUnit.defense ? attackingUnit.attack - defendingUnit.defense : 0;
                defendingUnit.health -= damage;
                
                if (attackingUnit instanceof Vampire) {
                    attackingUnit.doVampRegen(damage);
                };
                
                if (attackingUnit instanceof Lancer && defendingArmy.units.length > 1 && damage > 0) {
                    attackingUnit.doPuncturingAttack(damage, defendingArmy.units[1]);
                    
                    if (!defendingArmy.units[1].isAlive) {
                        defendingArmy.units.splice(1, 1);
                    };
                };
                
                if (attackingArmy.units[1] instanceof Healer && attackingArmy.units.length > 1) {
                    attackingArmy.units[1].heal(attackingUnit);
                };
                
                if (!defendingUnit.isAlive()) {
                    defendingArmy.units.shift();
                    break;
                };
                
                let bufferArmy = attackingArmy;
                attackingArmy = defendingArmy;
                defendingArmy = bufferArmy;
            };
        
        };
        
        return army1.units.length != 0     
    }
}
