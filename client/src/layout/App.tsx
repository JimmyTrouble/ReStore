import React, { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import { Container, CssBaseline, Typography } from "@mui/material";
import Header from "./Header";

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
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
};

export default App;
