import { React } from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories.component";
import Products from "../Products/Products.component";
import Slider from "../Slider/Slider";
import { useAxiosFeaturedProducts } from "../../utils/hooks/useAxiosFeaturedProducts";

function Homepage() {
  const { featuredProducts, loading } = useAxiosFeaturedProducts();

  return (
    <div className="homepage">
      <Slider />
      <Categories />
      {loading ? (
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
