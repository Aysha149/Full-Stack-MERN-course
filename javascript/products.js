let products = [
  { name: "T.V", price: 55000, stock: 20 },
  { name: "Refrigerator", price: 42000, stock: 30 },
  { name: "Sofa", price:32000 , stock: 50 },
];

products.forEach((p) => {
  console.log(`${p.name}: ₹${p.price}`);
});

let expensive = products.filter((p) => p.price > 100);
console.log("Expensive Products:", expensive);

let inventoryValue = products.reduce(
  (total, product) => total + (product.price * product.stock),
  0
);
console.log(`Total Value of Inventory in Warehouse = ${inventoryValue}`);