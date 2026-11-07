"use strict";
let getPassedStudents = (students) => students.filter(s => s.marks >= 40);
let students = [
    { name: "Ali", marks: 35, passed: false },
    { name: "Sara", marks: 78, passed: true },
    { name: "John", marks: 90, passed: true }
];
console.log(getPassedStudents(students));
