import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./FeaturedItem.css";

function FeaturedItem(props) {
  let imgStyle = {
    background: `url('${props.imgUrl}')`,
  };

  return (
    <Router>
      <div className="featured-item">
        <div className="featured-content">
          <div className="featured-image" style={imgStyle}>
            <div className="hover-features">
              <ul>
                <li>
                  <Link to="#">
                    <i class="fas fa-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i class="fas fa-retweet"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i class="fas fa-shopping-cart"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="products-info">
            <h6>{props.name}</h6>
            <h5 className="price">${props.price}</h5>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default FeaturedItem;
