"use strict";
// 1. получить объект модального окна с классом .wrap
let modal = document.getElementsByClassName("wrap")[0];
// 2. получить тег span, используемый для закрытия окна
let span = document.getElementsByTagName("span")[0];
// 3. получить кнопку, используемую для показа модального окна
let button = document.getElementsByTagName("button")[0];

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
button.addEventListener("click", function (event) {
    modal.classList.remove("hidden");
    event.stopPropagation();
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
span.addEventListener("click", function(event) {
    modal.classList.add("hidden");
    event.stopPropagation();
});