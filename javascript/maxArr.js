"use strict";
function maxArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray([10, 20, 30]));
console.log(maxArray([-5, -2, -10]));
console.log(maxArray([]));
