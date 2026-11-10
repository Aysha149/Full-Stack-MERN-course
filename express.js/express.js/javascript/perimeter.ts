function calculatePerimeter(l: number, b: number): number {
    let result: number = 2 * l + 2 * b;
    return result;
}

let perimeter: number = calculatePerimeter(10, 5);
console.log(`Perimeter = ${perimeter}`);