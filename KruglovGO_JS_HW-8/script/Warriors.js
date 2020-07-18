// Бойцы, участвующие в сражениях. Все наследуюся от Warrior.

"use strict";

class Warrior {
    constructor(name, attack, health, defense, maxHealth) {
        this.name = "nameless";
        this.attack = 5;
        this.health = 50;
        this.defense = 0;
        this.maxHealth = this.health; 
    }
    
    // Благодаря данному методу оперделяется итог сражений
    isAlive() {
        return this.health > 0;
    }
}

class Knight extends Warrior {
    constructor(name, attack, health, defense, maxHealth) {
        super(name, health, defense, maxHealth);
        this.attack = 7;
    }
}

class Defender extends Warrior {
    constructor(name, attack, health, defense, maxHealth) {
        super(name);
        this.attack = 3;
        this.health = 60;
        this.defense = 2;
        this.maxHealth = this.health;
    }
}

class Vampire extends Warrior {
    constructor(name, attack, health, defense, maxHealth) {
        super(name, defense);
        this.attack = 4;
        this.health = 40;
        this.vampirism = 50;
        this.maxHealth = this.health;
    }
    
    // Метод данного класса, восстанавливает здоровье, в дависимости от нанесённого урона,
    // может быть меньше, чем атака данного класса из-за возможной защиты противника
    // не позволяет лечиться сверх максимального здоровья
    doVampRegen(damageToEnemy) {
        let hurt = this.maxHealth - this.health;
        if (hurt > 0) {
            let vampHP = Math.floor(damageToEnemy * this.vampirism / 100);
            this.health += hurt > vampHP ? vampHP : hurt;
        }
    }
}

class Lancer extends Warrior {
    constructor(name, attack, health, defense, maxHealth) {
        super(name, health, defense, maxHealth);
        this.attack = 6;
        this.puncture = 50;
    }
    
    // Метод данного класса, позволяющий в сражений армиями ранить следующего за атакуемым бойца 
    // максимум на половину прошедшей атаки - учитывается возможная защита как основной цели, 
    // так и следующей за ней
    doPuncturingAttack(mainDamage, nextTarget) {
        let damageToNextTarget = Math.floor(mainDamage * this.puncture / 100) - nextTarget.defense;
        nextTarget.health -= damageToNextTarget > 0 ? damageToNextTarget : 0;
    }
}

// Данный класс применяется в сражениях армиями, т.к. в битвах 1 на 1 он или точно погибнет, 
// не нанеся урона, или может случиться бесконечное противостояние (злобное переглядывание)
// двух целителей
class Healer extends Warrior {
    constructor(name, attack, health, defense, maxHealth) {
        super(name);
        this.attack = 0;
        this.health = 60;
        this.healPower = 2;
        this.maxHealth = this.health;
    }
    
    // Метод данного класса, позволяющий в сражений армиями лечить союзника, данного класса
    // стоящего перед бойцом, нелзя исцелить сверх максимального здоровья класса союзника
    heal(healTarget) {
        let hurt = healTarget.maxHealth - healTarget.health;
        if (hurt > 0) {
            healTarget.health += hurt > this.healPower ? this.healPower : hurt;
        }
    }
}
