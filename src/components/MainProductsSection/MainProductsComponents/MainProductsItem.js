import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./MainProductsItem.css";

function MainProductsItem({ imgUrl, name, price }) {
  return (
    <Router>
      <div className="main-products-item">
        <Link to="#" className="main-product-content">
          <div className="main-product-image">
            <img src={imgUrl} alt="" />
          </div>
          <div className="main-product-info">
            <h5>{name}</h5>
            <h6>${price}</h6>
          </div>
        </Link>
      </div>
    </Router>
  );
}

export default MainProductsItem;
