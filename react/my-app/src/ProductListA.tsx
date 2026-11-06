// ProductListA.tsx

function ProductListA() {
  let products = [
    "Smartphone",
    "Laptop",
    "Wireless Headphones",
    "Smartwatch",
    "Bluetooth Speaker",
    "Gaming Console",
  ];

  return (
    <div className="p-4" >
      <h2 className="text-success"> Available Products</h2>

      <ul className="list-group p-3">
        {products.map((product) => (
          <li className="list-group-item">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListA;