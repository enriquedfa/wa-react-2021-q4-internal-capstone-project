import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function CartItem({ item, stock, onRemoveItem, onChangeQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [oldQuantity, setOldQuantity] = useState(item.quantity);
  const availableStock = Array.from({ length: stock }, (v, k) => k + 1);

  useEffect(() => {
    if (oldQuantity !== quantity) {
      setOldQuantity(quantity);
    }
  }, [setOldQuantity, oldQuantity, quantity]);

  function handleChangeQuantity(e) {
    onChangeQuantity(
      item.id,
      parseInt(e.target.value),
      oldQuantity,
      item.price
    );
    setQuantity(e.target.value);
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-title">
          <h4>{item.name}</h4>
        </div>
        <div className="cart-item-sku" title="Item SKU">
          {item.id}
        </div>
        <div className="cart-item-price">
          <div className="cart-item-price-value" title="Item Unit Price">
            $ {item.price}
          </div>
        </div>
        <div className="cart-item-quantity">
          <div className="cart-item-quantity-value">
            <label>
              Quantity:
              <select
                name="quantity"
                className="product-detail-quantity"
                onChange={handleChangeQuantity}
                value={quantity}
              >
                {availableStock.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
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
        <div className="cart-item-total-value" title="Item Subtotal">
          Total: $ {item.price * item.quantity}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
