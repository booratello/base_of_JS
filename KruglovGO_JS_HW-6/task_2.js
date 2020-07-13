"use strict";

let leftArrow = document.querySelector(".to-left");

let rightArrow = document.querySelector(".to-right");

window.addEventListener("load", function () {
    leftArrow.addEventListener("click", function () {
        images.setNextLeftImg();
    });
    
    rightArrow.addEventListener("click", function () {
        images.setNextRightImg();
    });
    
    images.init();
});

let images = {
    currentIdx:0,
    slides:[],
    init() {
        this.slides = document.querySelectorAll(".bgimg");
        this.showImageWithCurrentIdx();
    },
    
    showImageWithCurrentIdx() {
        this.currentImg = this.slides[this.currentIdx];
        this.currentImg.classList.remove("hidden-bgimg");
    },
    
    hideImg() {
        document.querySelector(".bgimg:not(.hidden-bgimg)").classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeInRight');
        document.querySelector(".bgimg:not(.hidden-bgimg)").classList.add("hidden-bgimg");
    },
    
    setNextLeftImg() {
        this.hideImg();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
        this.currentImg.classList.add('animate__animated', 'animate__fadeInRight');
        this.currentImg.style.setProperty('--animate-duration', '0.5s');
    },
    
    setNextRightImg() {
        this.hideImg();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
        this.currentImg.classList.add('animate__animated', 'animate__fadeInLeft');
        this.currentImg.style.setProperty('--animate-duration', '0.5s');
    }
};
