function calculateArea(length: number, breadth: number) : number {
  let area: number = length * breadth;
  return area;
}

let area: number = calculateArea(12, 6);
console.log("Area = " + area);