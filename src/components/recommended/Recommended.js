import React, { useState, useEffect } from "react";
import ProductItem from "../products/ProductItem";

import "./Recommended.css";

const Recommended = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(process.env.REACT_APP_API + "recommend/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: localStorage.getItem("id"),
      }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  };
  return (
    products.length > 0 && (
      <section className="recommended-section">
        <h2>Recommended Products</h2>
        <ul className="recommended-list">
          {products.map((product) => (
            <ProductItem productItem={product} />
          ))}
        </ul>
        <hr />
      </section>
    )
  );
};

export default Recommended;
