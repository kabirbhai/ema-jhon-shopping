import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/Shop">Shop</Link>
          <Link to="/Orders">Orders</Link>
          <Link to="/Inventory">Inventory</Link>
          <Link to="/About">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
