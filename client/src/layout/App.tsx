import React, { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import { Typography } from "@mui/material";

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
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }
  return (
    <>
      <Typography variant="h1">ReStore</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
};

export default App;
