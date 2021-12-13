import { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter/AppRouter";
import CartContext from "./state/CartContext";
import CartReducer from "./state/CartReducer";

function App() {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    total: 0,
    totalItems: 0,
  });

  return (
    <Router>
      <CartContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
