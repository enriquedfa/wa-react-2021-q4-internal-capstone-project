import React from "react";
import logo from "./logo.png";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/Home">
          <img src={logo} alt="E Commerce" />
        </Link>
      </div>
      <div className="header__search">
        <form action={`/search`} method="GET">
          <input
            name="q"
            id="searchTerm"
            type="text"
            placeholder="Search for products"
          />
          <button type="submit">
            <MdSearch />
          </button>
        </form>
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
