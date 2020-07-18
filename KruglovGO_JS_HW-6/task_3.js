"use strict";


let basketBtn = document.querySelector(".basket");
let basketMenu = document.querySelector(".dropdownmenu");
basketBtn.addEventListener("click", function () {

    if (basketMenu.style.display === "block") {
      basketMenu.style.display = "none";
    } else {
      basketMenu.style.display = "block";
    }
})

/*Моя изначальная задумка работала из рук вон плохо, поэтому взял ваш вариант,
хоршоенько в нём разобрался и с минимальеыми правками прикрутил его к своей странице.
Пока что, к сожалению, JS даётся мне тяжеловато, хотя казалось бы большая часть материала довольно понятна.
Буду больше практиковаться*/

let basketBtns = document.querySelectorAll('.toBasketBtn');
basketBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let id = event.target.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addProduct({ id: id, price: price, name: name })

    })
});


let basket = {
    products: {},

    addProduct(product) {
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        this.renderTotalSum();
        this.addRemoveBtnsListeners();
    },
    
    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },
    
    renderProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        
        let productRow = `
            <tr>

                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },
    
    renderTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum();
    },

    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },

    addRemoveBtnsListeners() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', this.removeProductListener);
        }
    },
    
    removeProductListener(event) {
        basket.removeProduct(event);
        basket.renderTotalSum();
    },

    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    },
    
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    }
}
