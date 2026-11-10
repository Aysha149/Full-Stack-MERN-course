interface Product {
  title: string;
  price: number;
  description?: string;
}

let product: Product = {
  title: "Macbook pro",
  price: 150000,
  description: " 1 TB Hard Drive, 16 GB Ram",
};

let product2:Product = {
    title: "Headset",
    price: 1500
}

console.log(product);