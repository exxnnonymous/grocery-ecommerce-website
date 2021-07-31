import React from 'react';
import MainProductsItem from "./MainProductsItem";

import "./MainProductSlider.css";

function MainProductSlider({ productsInfo }) {
    return (
        <div className="item sliding-col">
            {productsInfo.map((product, index) => {
                return (
                    <MainProductsItem
                        id={index}
                        imgUrl={product.imgUrl}
                        name={product.name}
                        price={product.price}
                    />
                );
            })}
        </div>
    )
}

export default MainProductSlider
