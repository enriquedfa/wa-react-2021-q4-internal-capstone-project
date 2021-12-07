import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../state/CartContext";
import CheckoutCart from "../CheckoutCart/CheckoutCart.component";
import CheckoutForm from "../CheckoutForm/CheckoutForm.component";
function Checkout() {
  const { state } = useContext(CartContext);
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <CheckoutForm />
        <div className="checkout-cart">
          <CheckoutCart items={state.cart} />
          <div className="checkout-buttons">
            <button className="checkout-button">
              <Link to="/cart">Go back to cart</Link>
            </button>
            <button className="checkout-button">
              <a href="/">Place Order</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
