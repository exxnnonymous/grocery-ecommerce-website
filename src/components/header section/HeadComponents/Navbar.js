import React from "react";
import Navmenu from "./Navmenu";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <div className="logo">GROCERY</div>
        <Navmenu />
        <div className="cart">
          <ul>
            <li>
              <i className="fas fa-heart"></i>
              <span>1</span>
            </li>
            <li>
              <i className="fas fa-shopping-bag"></i>
              <span>3</span>
            </li>
          </ul>
          <div className="cart-price">
            item: <span>$150.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
