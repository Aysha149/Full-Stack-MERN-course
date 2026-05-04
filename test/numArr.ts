function sumArray(numbers: number[]): number {
    let result: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}


let numbers: number[] = [10, 20, 30];
let  result: number = sumArray(numbers);

console.log(result);