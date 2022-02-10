import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

import CartContext from "../../context/CartContext";
import Rate from "../rate/rate";
import Addproduct from "../products/AddProduct";

const ProductDetail = (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [rateWeight, setRateWeight] = useState(1);
  const cartCtx = useContext(CartContext);
  //   const price = `$${props.price.toFixed(2)}`;

  const editProductHandler = () => {
    navigate("/add-product", { state: { product: product } });
  };

  const deleteProductHandler = () => {
    fetch(process.env.REACT_APP_API + "ProductName", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProductID: productID,
      }),
    }).then((res) => {
      res.json();
      window.location.reload(false);
    });
  };

  const location = useLocation();
  const { productID } = location.state;
  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchProductDetails();
      setProduct(product);
    };
    getProduct();
  }, []);
  const fetchProductDetails = async () => {
    const res = await fetch(process.env.REACT_APP_API + "getProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProductID: productID,
      }),
    });
    const data = await res.json();
    return data;
  };
  const handleRate = (rate) => {
    setRateWeight(rate);
    console.log(rate);
  };
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: product.ProductID,
      brand: product.BrandName,
      name: product.Model,
      rate: rateWeight,
      amount: 1,
      price: product.Price,
    });
  };

  return (
    <div className="detail">
      <img
        src={process.env.REACT_APP_PHOTOPATH + product.Picture}
        alt={product.Model}
      />
      <div className="productData">
        <p>
          <span>Brand:</span> {product.BrandName}
        </p>
        <p>
          <span>Model:</span> {product.Model}
        </p>
        <p>
          <span>Color:</span> {product.Color}
        </p>
        <p>
          <span>Spec:</span> {product.Specs}
        </p>
        <p>
          <span>Price:</span> {product.Price}
        </p>
        <Rate onRate={handleRate} />
        <button className="btn" onClick={addToCartHandler}>
          Add To Cart
        </button>
        {localStorage.getItem("Admin") && (
          <button className="btn" onClick={editProductHandler}>
            Edit Product
          </button>
        )}
        {localStorage.getItem("Admin") && (
          <button className="btn" onClick={deleteProductHandler}>
            Delete Product
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
