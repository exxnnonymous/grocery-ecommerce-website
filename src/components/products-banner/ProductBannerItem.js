import React from "react";
import "./ProductBannerItem.css";

function ProductBannerItem(props) {
  return (
    <div className="product-banner-item">
      <img src={props.imgUrl} alt="" />
    </div>
  );
}

export default ProductBannerItem;
