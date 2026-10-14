const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to Express Js Student API");
});

// app.get("/about", (request, response) => {
//   response.send("Express JS Student API Version 1.0 [Created by Aysha]");
// });

// const students = [
//   {
//     id: 1,
//     name: "Aysha",
//     course: "MERN Stack",
//   },
//   {
//     id: 2,
//     name: "Hani",
//     course: "Web design",
//   },
//   {
//     id: 3,
//     name: "Aimal",
//     course: "Python",
//   },
// ];

// app.get("/students", (request, response) => {
//   response.json(students);
// });

// app.get("/students/:id", (request, response) => {
//   const id = Number(request.params.id);

//   const student = students.find((student) => student.id === id);

//   if (!student) {
//     return response.status(404).json({
//       message: "Student not found",
//     });
//   }

//   return response.json(student);
// });

// app.get("/students/search", (request, response) => {
//   const name = request.query.name.toLowerCase();

//   const student = students.filter((student) =>
//     student.name.toLowerCase().includes(name),
//   );

//   if (student.length === 0) {
//     return response.status(404).json({
//       message: "Student not found",
//     });
//   }

//   response.json(student);
// });

// app.post("/students", (request, response) => {
//   const studentData = request.body;

//   if (!studentData.name || !studentData.course) {
//     return response.status(400).json({
//       message: "Student Name and Course are required",
//     });
//   }

//   const student = {
//     id: students.length + 1,
//     name: studentData.name,
//     course: studentData.course,
//   };

//   students.push(student);

//   return response.status(201).json({
//     message: "Student registration completed successfully!",
//     student: student
//   });

// });

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 55000,
    category: "Electronics",
  },
  {
    id: 2,
    title: "Bluetooth Speaker",
    price: 1800,
    category: "Electronics",
  },
  {
    id: 3,
    title: "iPhone 18",
    price: 80000,
    category: "Smartphone",
  },
];
app.get("/products", (request, response) => {
  response.json(products);
});

app.get("/products/search", (request, response) => {
  const title = request.query.title.toLowerCase();

  const product = products.filter((product) =>
    product.title.toLowerCase().includes(title),
  );

  if (product.length === 0) {
    return response.status(404).json({
      message: "Product not found",
    });
  }

  response.json(product);
});

app.get("/products/:id", (request, response) => {
  const id = Number(request.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return response.status(404).json({
      message: "Product not found",
    });
  }

  return response.json(product);
});

app.post("/products", (request, response) => {
  const productData = request.body;

  if (!productData.title || !productData.price || !productData.category) {
    return response.status(400).json({
      message: "Product Title, Price, and Category are required",
    });
  }

  const product = {
    id: products.length + 1,
    title: productData.title,
    price: productData.price,
    category: productData.category,
  };

  products.push(product);

  return response.status(201).json({
    message: "Product added successfully!",
    product: product,
  });
});

app.listen(PORT, () => {
  console.log("Backend API Server running at http://localhost:3000");
});
