class product {
    name;
    price;
    quantity;

    constructor(name,pricce,quantity) {
        this.name = name;
        this.price = pricce;
        this.quantity = quantity;
    }

    calculateTotalValue() {
            return this.price * this.quantity
    }

    applyDiscount(discountPercentage) {
        return this.price * (this.quantity - discountPercentage / 100)
}

restock(netQuantity) {
return (   this.quantity += netQuantity)
}

}

  const product1 = new product("Laptop", 900, 5);
  const  product2 = new product("Smartphone", 700, 8);
  const product3 = new product("Shoes", 120, 15);

console.log(product1.calculateTotalValue()); 
product2.applyDiscount(10);
console.log(product2.price);
product3.restock(10);
console.log(product3.quantity); 