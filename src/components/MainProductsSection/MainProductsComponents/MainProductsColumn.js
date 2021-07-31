import React from "react";
import MainProductSlider from "./MainProductSlider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./MainProductsColumn.css";

// import {
//   mainProductinfo_1,
//   mainProductinfo_2,
//   mainProductinfo_3,
// } from "./MainProductsInfo";

function MainProductsColumn({
  title,
  data: { mainProductinfo_1, mainProductinfo_2, mainProductinfo_3 },
}) {
  return (
    <div className="main-products-col">
      <h1 className="main-product-title">{title}</h1>

      <OwlCarousel
        loop
        items={1}
        nav
        margin={5}
        autoplay
        autoplayTimeout={4000}
        smartSpeed={1200}
      >
        <MainProductSlider productsInfo={mainProductinfo_1} />
        <MainProductSlider productsInfo={mainProductinfo_2} />
        <MainProductSlider productsInfo={mainProductinfo_3} />
      </OwlCarousel>
    </div>
  );
}

export default MainProductsColumn;
