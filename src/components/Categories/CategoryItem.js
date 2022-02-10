import React from "react";

import "./CategoryItem.css";

const Categoryitem = ({ Categoryitem }) => {
  return (
    <li className="category-item" key={Categoryitem.CategoryID}>
      <img
        src={process.env.REACT_APP_PHOTOPATH + Categoryitem.Picture}
        alt={Categoryitem.Name}
      />
      <h3>{Categoryitem.Name}</h3>
    </li>
  );
};

export default Categoryitem;
