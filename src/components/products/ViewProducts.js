import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

import "./ViewProducts.css";

const ViewProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      props.onLoading(true);
      const productList = await fetchProducts();
      props.onLoading(false);
      setProducts(productList);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(process.env.REACT_APP_API + "product");
    const data = await res.json();

    return data;
  };

  return (
    <section className="products-section">
      <h2>Featured Products</h2>
      <ul className="products-list">
        {products.length > 0 ? (
          products.map((product) => <ProductItem productItem={product} />)
        ) : (
          <p>No Products! Check Your Connection</p>
        )}
      </ul>
    </section>
  );
};

export default ViewProducts;
