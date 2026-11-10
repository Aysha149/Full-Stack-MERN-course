"use strict";
function sumArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sumArray([10, 20, 30]));
console.log(sumArray([]));
console.log(sumArray([-1, -2, 3]));
