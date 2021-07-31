import React from "react";
import "./banner.css";
function Banner() {
  const bannerBg = {
    backgroundImage: `url("./images/home-banner.png")`,
  };

  return (
    <div className="banner">
      <div className="banner-bg" style={bannerBg}>
        <div className="banner-content">
          <span>Fruit Fresh</span>
          <h1>
            Vegetable
            <br />
            100% Organic
          </h1>
          <p>Free pickup and Delivery Available</p>
          <button className="shopnow">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
