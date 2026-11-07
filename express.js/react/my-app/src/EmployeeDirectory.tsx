import EmployeeCard from "./EmployeeCard";

function EmployeeDirectory() {
  let employees = [
    {
      name: "Dina",
      position: "HR Manager",
      department: "HR",
      salary: 6000,
    },
    {
      name: "Aria",
      position: "head of IT",
      department:"IT",
      salary: 7500,
    },
    {
      name: "Hana",
      position: "Project Manager",
      department: "IT",
      salary: 8000,
    },
    {
      name: "Sofia",
      position: "Marketing Director",
      department: "Marketing",
      salary: 7000,
    },
    {
      name: "Zainab",
      position: "Financial Analyst",
      department: "Finance",
      salary: 6500,
    },
    {
      name: "Lina",
      position: "Financial Auditor",
      department: "Finance",
      salary: 8000,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-primary-emphasis text-center mb-4">List of Employees</h2>
      <div className="row g-4">
        {employees.map((emp) => (
          <div className="col-md-4">
            <EmployeeCard
              name={emp.name}
              position={emp.position}
              department={emp.department}
              salary={emp.salary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDirectory;