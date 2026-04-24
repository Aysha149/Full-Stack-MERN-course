// part1:Array,task-1;copy an array
console.log(".....Array,Task:1.....");

const colors = ["Red", "Blue", "Green"];

const copyColors = [...colors];

console.log("Original:", colors);
console.log("Copy:", copyColors);

// task-2 merge arrays
console.log(".....Array, Task:2.....");

const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Orange", "Grapes"];

const allFruits = [...fruits1, ...fruits2];

console.log("Merged Fruits:", allFruits);

//task-3 add elements
console.log(".....Array, Task:3.....");

const numbers = [2, 3, 4];

const newNumbers = [1, ...numbers, 5];

console.log("Updated Numbers:", newNumbers);

//part 2:Objects task-4 copy objects
console.log(".....Objects, Task:4.....");

const student = {
  name: "Rahul",
  age: 15,
};

const copyStudent = { ...student };

console.log("Student Copy:", copyStudent);

//Task-5  ubdate object
console.log(".....Objects, Task:5.....");

const updatedStudent = {
  ...student,
  age: 16,
  grade: "10th",
};

console.log("Updated Student:", updatedStudent);

//task-6 merge objects
console.log(".....Objects, Task:6.....");

const address = {
  city: "Bhatkal",
  state: "Karnataka",
};

const fullDetails = {
  ...student,
  ...address,
};

console.log("Merged Object:", fullDetails);

// part:3 Functions task-7 spead in call functions
console.log(".....Functions, Task:7.....");

const nums = [10, 20, 30];

function add(a, b, c) {
  return a + b + c;
}

const result = add(...nums);

console.log("Sum:", result);

//part:4 task-8 real life example
console.log(".....Real LIfe Example , Task:8.....");

const cart = {
  item: "Shoes",
  price: 2000,
};

const updatedCart = {
  ...cart,
  quantity: 2,
  price: 1800,
};

console.log("Final Cart:", updatedCart);

