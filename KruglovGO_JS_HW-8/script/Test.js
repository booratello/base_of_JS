// проверка, что все бои просчитываются верно.
// если проверка выполняется, при желании можно её отключить 
// и модифицировать параметры бойцов

"use strict";

// fight tests
let chuck = new Warrior();
let bruce = new Warrior();
let carl = new Knight();
let dave = new Warrior();
let mark = new Warrior();
let bob = new Defender();
let mike = new Knight();
let rog = new Warrior();
let lancelot = new Defender();
let eric = new Vampire();
let adam = new Vampire();
let richard = new Defender();
let ogre = new Warrior();
let freelancer = new Lancer();
let vampire = new Vampire();
let priest = new Healer();

console.assert(doFight(chuck, bruce) == true);
console.assert(doFight(dave, carl) == false);
console.assert(chuck.isAlive() == true);
console.assert(bruce.isAlive() == false);
console.assert(carl.isAlive() == true);
console.assert(dave.isAlive() == false);
console.assert(doFight(carl, mark) == false);
console.assert(carl.isAlive() == false);
console.assert(doFight(bob, mike) == false);
console.assert(doFight(lancelot, rog) == true);
console.assert(doFight(eric, richard) == false);
console.assert(doFight(ogre, adam) == true);
console.assert(doFight(freelancer, vampire) == true);
console.assert(freelancer.isAlive() == true);
console.assert(freelancer.health == 14);
priest.heal(freelancer);
console.assert(freelancer.health == 16);

// battle tests
let my_army = new Army();
my_army.doAddUnits(Defender, 2);
my_army.doAddUnits(Healer, 1);
my_army.doAddUnits(Vampire, 2);
my_army.doAddUnits(Lancer, 2);
my_army.doAddUnits(Healer, 1);
my_army.doAddUnits(Warrior, 1);

let enemy_army = new Army();
enemy_army.doAddUnits(Warrior, 2);
enemy_army.doAddUnits(Lancer, 4);
enemy_army.doAddUnits(Healer, 1);
enemy_army.doAddUnits(Defender, 2);
enemy_army.doAddUnits(Vampire, 3);
enemy_army.doAddUnits(Healer, 1);

let army_3 = new Army();
army_3.doAddUnits(Warrior, 1);
army_3.doAddUnits(Lancer, 1);
army_3.doAddUnits(Healer, 1);
army_3.doAddUnits(Defender, 2);

let army_4 = new Army();
army_4.doAddUnits(Vampire, 3);
army_4.doAddUnits(Warrior, 1);
army_4.doAddUnits(Healer, 1);
army_4.doAddUnits(Lancer, 2);

let battle = new Battle();

console.assert(battle.doBattle(my_army, enemy_army) == false);
console.assert(battle.doBattle(army_3, army_4) == true);
