import React from "react";
import "./FeaturedRow.css";
import FeaturedItem from "./FeaturedItem";
import featuredProducts from "./productsInfo";

function FeaturedRow() {
  return (
    <div className="featured-products-row">
      {featuredProducts.map((product, index) => {
        return (
          <FeaturedItem
            key={index}
            imgUrl={product.imgUrl}
            price={product.price}
            name={product.name}
          />
        );
      })}
    </div>
  );
}

export default FeaturedRow;
