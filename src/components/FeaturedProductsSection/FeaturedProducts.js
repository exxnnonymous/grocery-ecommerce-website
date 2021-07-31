import React from "react";
import FeaturedHead from "./FeaturedProductsComponents/FeaturedHead";
import "./FeaturedProducts.css";
import FeaturedRow from "./FeaturedProductsComponents/FeaturedRow";

function FeaturedProducts() {
  return (
    <div className="featured-filter-section">
      <div className="container featured-container">
        <FeaturedHead />
        <FeaturedRow />
      </div>
    </div>
  );
}

export default FeaturedProducts;
