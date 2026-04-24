let employees = [
  { name: "Aysha", salary: 48000 },
  { name: "Amna", salary: 33000 },
  { name: "Maria", salary: 28000 },
];

let employeesUpdated = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary + 2000,
}));

console.log("Updated Salaries:", employeesUpdated);