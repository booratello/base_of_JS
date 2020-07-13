// 1. получить элемент с классом .wrap и сохранить
// его в переменную
let modal = document.getElementsByClassName("wrap")[0];
// 2. получить тег span, сохранить в переменную
let span = document.getElementsByTagName("span")[0];
// 3. получить тег button, сохранить в переменную
let button = document.getElementsByTagName("button")[0];

// 4. на кнопку показа модального окна назначить обработку
// события клика
// 4.1 при клике функция обработчик у элемента с
// классом .wrap должна удалять классы rollOut и hidden,
// элементу с классом .wrap добавить классы animated и rollIn
button.addEventListener("click", function (event) {
    modal.classList.remove("hidden", "zoomOutDown");
    modal.classList.add("animated", "zoomInDown");
    event.stopPropagation();
});

// 5. назначить обработку клика по тегу span
// 5.1 при клике у элемента с классом .wrap удалите
// класс rollIn и добавьте класс rollOut
// 5.2 используя setTimeout через секунду элементу
// .wrap добавьте класс .hidden
span.addEventListener("click", function(event) {
    modal.classList.remove("zoomInDown");
    modal.classList.add("zoomOutDown");
    setTimeout(function() {
        console.log(modal.classList);
    }, 1000);
    event.stopPropagation();
});
