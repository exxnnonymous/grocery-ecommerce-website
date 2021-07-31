import React from "react";
import MainProductsColumn from "./MainProductsComponents/MainProductsColumn";
import "./MainProducts.css";
import {
  latestProduct,
  topRatedProduct,
  reviewProduct,
} from "./MainProductsComponents/MainProductsInfo";

function MainProducts() {
  return (
    <div className="main-products-section">
      <div className="container">
        <div className="row">
          <MainProductsColumn title="Latest Products" data={latestProduct} />
          <MainProductsColumn title="Top Rated Products" data={topRatedProduct} />
          <MainProductsColumn title="Review Products" data={reviewProduct} />
        </div>
      </div>
    </div>
  );
}

export default MainProducts;
