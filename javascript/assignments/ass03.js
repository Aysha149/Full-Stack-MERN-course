"use strict";
//  Problem 1: Single Student
console.log("...PROBLEM:01...");
let student1 = {
    name: "Alice",
    age: 19,
    email: "alice@example.com",
    subjects: ["Math", "Science", "English"]
};
console.log("Student 1 Details:");
console.log(student1);
//  Problem 2: Multiple Students
console.log("...PROBLEM:02...");
let student2 = {
    name: "Bob",
    age: 17,
    email: "bob@example.com",
    subjects: ["History", "Geography"]
};
let student3 = {
    name: "Charlie",
    age: 20,
    email: "charlie@example.com",
    subjects: ["Physics", "Chemistry", "Math"]
};
let students = [student1, student2, student3];
console.log("\nAll Students:");
students.forEach((student, index) => {
    console.log(`\nStudent ${index + 1}:`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Email: ${student.email}`);
    console.log(`Subjects: ${student.subjects.join(", ")}`);
});
//  Problem 3: Filter Students by Age (>18)
console.log("...PROBLEM:03...");
function filterByAge(students) {
    return students.filter(student => student.age > 18);
}
let olderStudents = filterByAge(students);
console.log("\nStudents older than 18:");
console.log(olderStudents);
//  Problem 4: Count Subjects
console.log("...PROBLEM:04...");
function countSubjects(student) {
    return student.subjects.length;
}
let subjectCount = countSubjects(student1);
console.log(`\nNumber of subjects for ${student1.name}: ${subjectCount}`);
