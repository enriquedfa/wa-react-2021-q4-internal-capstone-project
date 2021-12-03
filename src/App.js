import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
