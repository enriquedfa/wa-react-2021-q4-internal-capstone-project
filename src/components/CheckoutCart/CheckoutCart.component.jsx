import CheckoutCartItem from "../CheckoutCartItem/CheckoutCartItem.component";

function CheckoutCart({ items }) {
  return (
    <div className="checkout-cart">
      <h2>Cart</h2>
      <div className="items">
        {items.map((item) => (
          <CheckoutCartItem key={item.id} {...item} />
        ))}
        <div className="total">
          <span>
            Total: ${" "}
            {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCart;
