import React from "react";
import Categories from "./HomeCoponents/Categories";
import Banner from "./HomeCoponents/Banner";
import Searchbar from "./HomeCoponents/Searchbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container home-container">
        <div className="row">
          <div className="col col-left">
            <Categories />
          </div>
          <div className="col col-right">
            <Searchbar />
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
