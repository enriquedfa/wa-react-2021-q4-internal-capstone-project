import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import ProductsPage from "../ProductsPage/ProductsPage";
import ProductDetail from "../ProductDetail/ProductDetail";
import SearchResults from "../SearchResults/SearchResults";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Home" element={<Homepage />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path="/Product/:productId" element={<ProductDetail />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
}

export default AppRouter;
