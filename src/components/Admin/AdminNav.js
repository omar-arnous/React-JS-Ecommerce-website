import React from "react";
import { Link } from "react-router-dom";

const Adminnav = () => {
  const handleClick = () => {
    localStorage.clear("id");
    window.location.reload(false);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">Smart Shop</Link>
      </div>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/add-product" state={{ product: "" }}>
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-category">Add Category</Link>
          </li>
          <li className="nav-item">
            <Link to="/customers">View Customers</Link>
          </li>

          <li className="nav-item sign" onClick={handleClick}>
            Sign out
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Adminnav;
