"use strict";
function sumArray(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
let input = [10, 20, 30];
let result = sumArray(input);
console.log(result);
