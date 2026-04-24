"use strict";
function isEven(num) {
    let result = num % 2 === 0;
    return result;
}
let check = 12;
console.log(`${check} is even? ${isEven(check)}`);
