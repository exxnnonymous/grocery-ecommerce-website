import React from "react";
import "./Head.css";

function Head() {
  return (
    <div className="head">
      <div className="container head-container">
        <div className="col col-left">
          <p>
            <i className="fas fa-envelope"></i>hello@grocery.com
          </p>
          <p>Free Shipping for all Order of $99</p>
        </div>
        <div className="col col-right">
          <ul className="social-links-container">
            <li className="social-links">
              <i className="fab fa-facebook-f"></i>
            </li>
            <li className="social-links">
              <i className="fab fa-twitter"></i>
            </li>
            <li className="social-links">
              <i className="fab fa-instagram"></i>
            </li>
            <li className="social-links">
              <i className="fab fa-linkedin-in"></i>
            </li>
          </ul>
          <div className="choose-language">
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
              alt=""
            />
            English
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="login">
            <i className="fas fa-user"></i>Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
