import { useState } from "react";
import { MdDelete } from "react-icons/md";

function CartItem({ item, stock, onRemoveItem, onChangeQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const availableStock = Array.from({ length: stock }, (v, k) => k + 1);

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-title">{item.name}</div>
        <div className="cart-item-sku">{item.id}</div>
        <div className="cart-item-price">
          <div className="cart-item-price-value">$ {item.price}</div>
        </div>
        <div className="cart-item-quantity">
          <div className="cart-item-quantity-value">
            Quantity:{" "}
            <select
              id="quantity"
              className="product-detail-quantity"
              onChange={(e) => {
                setQuantity(e.target.value);
                onChangeQuantity(item.id, parseInt(e.target.value));
              }}
              value={quantity}
            >
              {availableStock.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="cart-item-remove">
          <button
            className="cart-item-remove-button"
            onClick={() => onRemoveItem(item.id)}
          >
            <MdDelete />
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item-total">
        <div className="cart-item-total-value">
          Total: $ {item.price * item.quantity}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
