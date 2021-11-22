import React from "react";
import Categories from "../Categories/Categories.component";
import Products from "../Products/Products.component";
import Slider from "../Slider/Slider";
import featured from "../../mocks/featured-products.json";

function Homepage() {
  return (
    <div className="homepage">
      <Slider />
      <Categories />
      <Products data={featured} header="Featured Products" />
    </div>
  );
}

export default Homepage;
