import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./productsSlider.css";
import SliderItem from "./SliderItem";
import productSliderInfo from "./productsInfo";

function ProductsSlider() {



  return (
    <div className="products-slider">
      <div className="container products-container">
        <OwlCarousel
          loop
          items={4}
          nav
          margin={20}
          autoplay
          autoplayTimeout={6000}
          smartSpeed={1500}
          animateIn="linear"
          animateOut="linear"
        >
          {productSliderInfo.map((product, index) => {
            return (
              <SliderItem
                id={index}
                imgUrl={product.imgUrl}
                head={product.head}
              />
            )
          })
          }

        </OwlCarousel>
      </div>
    </div>
  );
}

export default ProductsSlider;
