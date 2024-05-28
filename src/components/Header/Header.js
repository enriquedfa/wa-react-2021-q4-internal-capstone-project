import React from "react";
import logo from "./logo.png";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "../Search/Search.component";
import CartContext from "../../state/CartContext";

function Header() {
  const { state } = React.useContext(CartContext);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/Home" aria-label="Home">
          <img src={logo} alt="E Commerce" />
        </Link>
      </div>
      <Search route={"/search"} />
      <div className="header__nav">
        <div className="header__nav--left">
          <a href="/">
            <span>Hello, Sign in</span>
          </a>
        </div>
        <div className="header__nav--right">
          <Link to="/Cart">
            <span>Cart</span>
            {` (${state.totalItems}) `}
            <MdShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
