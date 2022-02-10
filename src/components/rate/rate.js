import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./rate.css";

const Rate = (props) => {
  //   const userID = localStorage.getItem("id");
  //   const [rateWeight, setRateWeight] = useState(1);
  //   const handleRate = (rate) => {
  //     setRateWeight(rate);
  //     fetch(process.env.REACT_APP_API + "rate", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         CustomerID: userID,
  //         ProductID: productID,
  //         RateWeight: rateWeight,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .catch((err) => alert(err));
  //   };

  const handleClick = (rateWeight) => {
    props.onRate(rateWeight);
  };

  return (
    <div className="stars">
      <span className="star" onClick={() => handleClick(1)}>
        &nbsp;
      </span>
      <span className="star" onClick={() => handleClick(2)}>
        &nbsp;
      </span>
      <span className="star" onClick={() => handleClick(3)}>
        &nbsp;
      </span>
      <span className="star" onClick={() => handleClick(4)}>
        &nbsp;
      </span>
      <span className="star" onClick={() => handleClick(5)}>
        &nbsp;
      </span>
    </div>
  );
};

export default Rate;
