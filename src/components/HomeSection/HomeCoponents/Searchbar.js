import React from "react";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="searchbox">
      <div className="search-form">
        <form action="#">
          <div className="select-categories">
            <select name="" id="">
              <option>All Categories</option>
              <option>Fresh Meat</option>
              <option>Vegetables</option>
            </select>
            <span></span>
          </div>
          <input type="text" placeholder="What do you need?" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="search-phone">
        <div className="phone-icon">
          <i class="fas fa-phone-alt"></i>
        </div>
        <div className="phone-info">
          <h5>+65 11.188.888</h5>
          <span>support 24/7 time</span>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
