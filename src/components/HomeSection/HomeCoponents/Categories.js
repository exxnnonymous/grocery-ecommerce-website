import React, { useState, useEffect, useRef } from "react";
import "./Categories.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Categories() {

  const [toggle, setToggle] = useState(true);
  const [heightEle, setHeightEle] = useState();

  const refHeight = useRef()

  useEffect(() => {
    setHeightEle(`465px`)
  }, [])

  const toggleState = () => {
    setToggle(!toggle)
  }

  return (
    <Router>
      <div className="home-categories">
        <div className="categories-head" onClick={toggleState}>
          <i class="fas fa-bars"></i>
          <span>All departments</span>
        </div>
        <ul
          className={toggle ? "categories-list animated-categories" : "categories-list"}
          ref={refHeight}
          style={{ height: toggle ? `${heightEle}` : "0px", padding: toggle ? "10px 0 10px 40px" : "0px 0px 0px 40px" }}
        >
          <li>
            <Link to="#">Fresh Vegetables</Link>
          </li>
          <li>
            <Link to="#">Fresh Meat</Link>
          </li>
          <li>
            <Link to="#">Sea Foods</Link>
          </li>
          <li>
            <Link to="#">Fruits and Nuts</Link>
          </li>
          <li>
            <Link to="#">Butter and Eggs</Link>
          </li>
          <li>
            <Link to="#">FastFood</Link>
          </li>
          <li>
            <Link to="#">Fresh Onion</Link>
          </li>
          <li>
            <Link to="#">Oatmeal</Link>
          </li>
          <li>
            <Link to="#">Papayaya & Crips</Link>
          </li>
          <li>
            <Link to="#">Fresh Bananas</Link>
          </li>
          <li>
            <Link to="#">Fresh Berries</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default Categories;
