let students = [
    { name: "Amna" , marks: 86 },
    { name: "Aysha" , marks: 94 },
    { name: "Maria", marks: 52 },
    { name: "Mehreen" , marks: 63 },
    { name: "Maryam" , marks: 77 },
];
 

let toppers = students.filter(student => student.marks > 75);
console.log("Toppers:", toppers);

let passed = toppers.map(student => student.name);
console.log("Passed Students:", passed);

let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log("Total Marks Of All Students:", totalMarks);

