import React, { useEffect, useState } from "react";
import { Product } from "./product";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prev) => [
      ...products,
      {
        id: prev.length + 101,
        name: "product" + (prev.length + 1),
        price: prev.length * 100 + 100,
      },
    ]);
  }
  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((product, i) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
