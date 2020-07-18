// Данный класс создаёт новую армию.
// Её метод позволяет добавлят к аримии указанное количество бойцов одного класса "пачками".

"use strict";

class Army {
    constructor(units) {
        this.units = [];
    }
    
    doAddUnits(whatUnit, howMany) {
        while (howMany != 0) {
            this.units.push(new whatUnit());
            howMany -= 1;
        }
    }
}
