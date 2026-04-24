let students = [
  { name: "Afiya", marks:75 },
  { name: "Zuha", marks: 80 },
  { name: "Hani", marks:85},
];

let total = students.reduce((sum, student) => sum + student.marks, 0);
let average = total / students.length;

console.log("Average Marks:", average); 