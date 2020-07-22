// Данная функция применяется для боёв 1 на 1, каждый ход (итерацию циклв while) меняя роли бойцов -
// атакующий и защищающийся - пока один из них не погибнет.
// Учитываются все методы и атрибуты классов бойцов.
// Результатом является проверка, жив ли первый боец - если да, то он и победил, если нет, то второй боец.

"use strict";

function doFight(unit1, unit2) {
    let attacking = unit1;
    let defending = unit2;
    
    while (true) {
        let damage = attacking.attack > defending.defense ? attacking.attack - defending.defense : 0;
        defending.health -= damage;
        
        if (attacking instanceof Vampire) {
            attacking.doVampRegen(damage);
        };
        
        if (defending.health <= 0) {
            break;
        };
        
        let bufferUnit = attacking;
        attacking = defending;
        defending = bufferUnit;
    };
    
    return unit1.isAlive();
}
