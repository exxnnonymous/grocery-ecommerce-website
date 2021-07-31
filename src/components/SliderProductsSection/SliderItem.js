import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./SliderItem.css";

function SliderItem(props) {
  let imgStyle = {
    background: `url('${props.imgUrl}')`,
  };
  return (
    <Router>
      <div className="item slider-item" style={imgStyle}>
        <h1>
          <Link to="#">{props.head}</Link>
        </h1>
      </div>
    </Router>
  );
}

export default SliderItem;
