import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/Product/:productId" element={<ProductDetail />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
