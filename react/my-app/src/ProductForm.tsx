import { useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const total = price * quantity;

  return (
    <div className="container mx-auto p-4 shadow rounded" id="ProductForm">
      <h1 className="text-primary">Bill Calculator</h1>

      <div className="mb-3">
        <label className="fw-bold">Product Name</label>
        <input
          type="text"
          className="form-control"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="fw-bold">Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label className="fw-bold">Quantity</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      <h2 className="text-danger">Total:$ {total}</h2>

      <div className="mt-3">
        <h3 className="text-success">Bill Summary</h3>
        <p>Product: {product}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default ProductForm;