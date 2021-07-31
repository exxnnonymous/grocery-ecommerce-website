import React from "react";
import ProductBannerItem from "./ProductBannerItem";
import "./ProductBanner.css";

function ProductBanner() {
  return (
    <div className="products-banner-section">
      <div className="container">
        <div className="product-banner-row">
          <ProductBannerItem imgUrl="./images/product-banner/img1.png" />
          <ProductBannerItem imgUrl="./images/product-banner/img2.png" />
        </div>
      </div>
    </div>
  );
}

export default ProductBanner;
