import { React, useState } from "react";
import Categories from "../Categories/Categories.component";
import Products from "../Products/Products.component";
import Slider from "../Slider/Slider";
import featured from "../../mocks/featured-products.json";

function Homepage() {
  const [featuredProducts, setFeaturedProducts] = useState(featured);

  return (
    <div className="homepage">
      <Slider />
      <Categories />
      <Products
        data={featuredProducts}
        header="Featured Products"
        setFeaturedProducts={setFeaturedProducts}
      />
    </div>
  );
}

export default Homepage;
