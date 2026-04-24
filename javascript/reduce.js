let marks = [77, 90, 65, 80, 72, 40, 59];
let totalMarks = 0;
for (mark of marks) {
    totalMarks = totalMarks + mark;}
    console.log(totalMarks);

let Marks = marks.reduce ((total, mark) => total + mark)
console.log(`Total Marks =  ${Marks}`);