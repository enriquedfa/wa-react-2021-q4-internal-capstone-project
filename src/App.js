import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import ProductsPage from "./components/ProductsPage/ProductsPage";

function App() {
  const [isHomepage, setIsHomepage] = useState(true);

  return (
    <div className="App">
      <Header setIsHomepage={setIsHomepage} />
      {isHomepage ? <Homepage /> : null}
      {isHomepage ? (
        <button
          className="btn-view-all"
          onClick={() => setIsHomepage(!isHomepage)}
        >
          View All Products
        </button>
      ) : null}
      {!isHomepage ? <ProductsPage /> : null}
      <Footer />
    </div>
  );
}

export default App;
