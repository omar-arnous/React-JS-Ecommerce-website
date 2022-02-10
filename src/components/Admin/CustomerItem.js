import React from "react";
import "./CustomerItem.css";

const Customeritem = ({ customerItem }) => {
  return (
    <li className="customer-item">
      <img src={customerItem.Picture} alt={customerItem.Name} />
      <div className="customer-details">
        <h3>{customerItem.Name}</h3>
        <p>{customerItem.Email}</p>
      </div>
    </li>
  );
};

export default Customeritem;
