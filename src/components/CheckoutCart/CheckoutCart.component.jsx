function CheckoutCart({ items }) {
  return (
    <div className="checkout-cart">
      <h2>Cart</h2>
      <div className="items">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <span className="name">{item.name}</span>
              <span className="price">Price: ${item.price}</span>
              <span className="qty">Qty: {item.quantity}</span>
              <span className="subtotal">
                Subtotal: $ {item.price * item.quantity}
              </span>
            </div>
          </div>
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
