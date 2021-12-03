import { React } from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories.component";
import Products from "../Products/Products.component";
import Slider from "../Slider/Slider";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

function Homepage() {
  const { data: featuredProducts, isLoading: featuredProductsIsLoading } =
    useFeaturedProducts();
  console.log("featuredProducts", featuredProducts);
  return (
    <div className="homepage">
      <Slider />
      <Categories />
      {featuredProductsIsLoading ? (
        <p>Loading...</p>
      ) : (
        <Products data={featuredProducts} header="Featured Products" />
      )}
      <Link to="/Products" className="btn-view-all">
        View All Products
      </Link>
    </div>
  );
}

export default Homepage;
