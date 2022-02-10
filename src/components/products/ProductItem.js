import React from "react";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

import "./ProductItem.css";
const Productitem = ({ productItem }) => {
  return (
    <li classNam="product-item" key={productItem.ProductID}>
      <div className="product-card">
        <img
          src={process.env.REACT_APP_PHOTOPATH + productItem.Picture}
          alt={productItem.Model}
        />
        <div className="product-data">
          <div>
            <h3>{productItem.BrandName}</h3>
            <p>{productItem.Model}</p>
          </div>
          <div className="details">
            <p>{productItem.Price}SP</p>
            <Link
              to="/details"
              state={{ productID: productItem.ProductID }}
              className="details-link"
            >
              see more &#8594;
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Productitem;
