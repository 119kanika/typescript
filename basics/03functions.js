"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase();  this will give error now as the method is fir strings not number
    return num + 2;
}
function getupper(val) {
    return val.toUpperCase();
}
addTwo(5);
getupper(43);
