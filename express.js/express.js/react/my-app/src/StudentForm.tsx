import "./StudentForm.css";
import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div
      className="mx-auto shadow rounded p-5"
      id="studentForm"
    >
      <h1 className="text-center  mb-4 ">
        Student Registration Form
      </h1>

      <label className="form-label fw-bold">Full Name:</label>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter full name"
        onChange={(e) => setName(e.target.value)} color="primary"
      />

      <label className="form-label fw-bold">Email:</label>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="form-label fw-bold">Course:</label>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter course"
        onChange={(e) => setCourse(e.target.value)}
      />

      <label className="form-label fw-bold">Address:</label>
      <textarea
        className="form-control mb-3"
        placeholder="Enter your address"
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <hr />

      <h4>
        Hello,<span className="text-secondary">{name}</span>
      </h4>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default StudentForm;