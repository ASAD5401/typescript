"use strict";
let a = 10;
console.log(a);
;
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income;
}
console.log(calculateTax(10000));
