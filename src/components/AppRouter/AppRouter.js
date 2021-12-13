import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import ProductsPage from "../ProductsPage/ProductsPage";
import ProductDetail from "../ProductDetail/ProductDetail";
import SearchResults from "../SearchResults/SearchResults";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Checkout from "../Checkout/Checkout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Home" element={<Homepage />} />
      <Route path="/Products" element={<ProductsPage />} />
      <Route path="/Product/:productId" element={<ProductDetail />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRouter;
