import React from "react";
import { MdShoppingCart, MdSearch } from "react-icons/md"

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                E Commerce
                <a href="/">
                    {/* <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="E Commerce" /> */}
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
                    {/* <a href="/">
                        <span>Returns</span>
                    </a>
                    <a href="/">
                        <span>Orders</span>
                    </a>
                    <a href="/">
                        <span>Prime</span>
                    </a> */}
                </div>
                <div className="header__nav--right">
                    <a href="/">
                        <span>Cart</span>
                        <MdShoppingCart />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;