import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./FeaturedHead.css";

function FeaturedHead() {
  return (
    <Router>
      <div className="featured-header">
        <div className="featured-title">
          <h1>Featured Product</h1>
        </div>

        <ul className="products-nav">
          <li className="active">
            <Link to="#">All</Link>
          </li>
          <li>
            <Link to="#">Fruits</Link>
          </li>
          <li>
            <Link to="#">Fresh Meat</Link>
          </li>
          <li>
            <Link to="#">Vegetables</Link>
          </li>
          <li>
            <Link to="#">Fastfood</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default FeaturedHead;
