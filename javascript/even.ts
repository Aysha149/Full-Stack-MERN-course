function isEven(num: number): boolean {
    let result: boolean = num % 2 === 0;
    return result;
}

let check: number = 12;
console.log(`${check} is even? ${isEven(check)}`); 