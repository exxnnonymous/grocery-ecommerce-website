import React from "react";
import "./App.css";
import Header from "./components/header section/Header";
import Home from "./components/HomeSection/Home";
import ProductsSlider from "./components/SliderProductsSection/productsSlider";
import FeaturedProducts from "./components/FeaturedProductsSection/FeaturedProducts";
import ProductBanner from "./components/products-banner/ProductBanner";
import MainProducts from "./components/MainProductsSection/MainProducts";
import Blog from "./components/BlogSection/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ProductsSlider />
      <FeaturedProducts />
      <ProductBanner />
      <MainProducts />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
