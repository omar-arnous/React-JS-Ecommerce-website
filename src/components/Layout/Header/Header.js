import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../nav/Nav";
import HeaderCartButton from "./HeaderCartButton";

import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Smart Shop</Link>
      </div>
      <div className="header-nav">
        <Nav />
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
    </header>
  );
};

export default Header;
