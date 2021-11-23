import React from "react";
import logo from "./logo.png";
import { MdShoppingCart, MdSearch } from "react-icons/md";

function Header({ setIsHomepage }) {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" onClick={() => setIsHomepage(true)}>
          <img src={logo} alt="E Commerce" />
        </a>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for products" />
        <button>
          <MdSearch />
        </button>
      </div>
      <div className="header__nav">
        <div className="header__nav--left">
          <a href="/">
            <span>Hello, Sign in</span>
          </a>
        </div>
        <div className="header__nav--right">
          <a href="/">
            <span>Cart</span>
            <MdShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
