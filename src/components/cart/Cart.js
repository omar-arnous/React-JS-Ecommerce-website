import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const id = localStorage.getItem("id");
  const orderHandler = (event) => {
    event.preventDefault();
    cartCtx.items.map((item) => {
      fetch(process.env.REACT_APP_API + `orderproduct/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProductID: item.id,
          ProductQuantity: item.amount,
          Rate: item.rate,
        }),
      })
        .then((res) => {
          res.json();
          res.status === 200 && navigate("/");
          cartCtx.items.map((item) => {
            cartCtx.removeItem(item.id);
          });
        })
        .catch((err) => alert(err));
    });
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div className="cart-section" onClick={props.onClose}>
      <div className="cart-card" onClick={() => {}}>
        <div className="cart-details">
          <span className="close" onClick={props.onClose}>
            &#10005;
          </span>
          {cartItems}
          {hasItems ? (
            <button className="order-btn" onClick={orderHandler}>
              Order Now!
            </button>
          ) : (
            <p>No Items has Been Added Add Some...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
