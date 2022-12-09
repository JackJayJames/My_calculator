'use strict';

class Kalkulacka {
    constructor(){
        this._tlacitka = document.querySelectorAll(".tlacitka");
        this.output = document.querySelector("#output");

        this._obsluhaTlacitek();
    }
    _obsluhaTlacitek(){
        for(let button of this._tlacitka){
            button.onclick = () => {
            };
        }
    }
}