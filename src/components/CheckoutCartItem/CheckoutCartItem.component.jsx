function CheckoutCartItem({ id, image, name, price, quantity }) {
  return (
    <div className="item" key={id}>
      <img src={image} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">Price: ${price}</span>
        <span className="qty">Qty: {quantity}</span>
        <span className="subtotal">Subtotal: $ {price * quantity}</span>
      </div>
    </div>
  );
}

export default CheckoutCartItem;
