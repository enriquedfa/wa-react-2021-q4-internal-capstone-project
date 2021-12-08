import { useState, useContext, useEffect } from "react";
import CartContext from "../../state/CartContext";

function ProductInfo(props) {
  const { state, dispatch } = useContext(CartContext);
  const [availableStock, setAvailableStock] = useState([1]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function handleSelect(e) {
    setSelectedQuantity(parseInt(e.target.value));
  }

  function handleAddToCart() {
    if (selectedQuantity > availableStock.length) {
      alert("Not enough stock");
      updateAvailableStock();
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: props.id,
          name: props.data.name,
          image: props.data.mainimage.url,
          price: props.data.price,
          quantity: selectedQuantity,
        },
      });
      updateAvailableStock();
    }
  }

  // Function to check how many of the same product are in the cart
  function checkCartQty() {
    let cart = state.cart;
    let cartQty = 0;
    if (cart) {
      cart.forEach((cartItem) => {
        if (cartItem.id === props.id) {
          cartQty = parseInt(cartItem.quantity);
        }
      });
      return cartQty;
    }
  }

  function updateAvailableStock() {
    let stock = props.data.stock;
    let cartQty = checkCartQty();
    let availableStock = Array.from({ length: stock }, (v, k) => k + 1);
    availableStock = availableStock.slice(0, availableStock.length - cartQty);
    setAvailableStock(availableStock);
  }

  useEffect(() => {
    updateAvailableStock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cart]);

  return (
    <div className="product-detail-info">
      <h1>{props.data.name}</h1>
      <p className="product-detail-category">{props.data.category.slug}</p>
      <p className="product-detail-sku">SKU: {props.data.sku}</p>
      <p className="product-detail-price">${props.data.price}</p>
      <p className="product-detail-description">
        {props.data.description[0].text}
      </p>
      <div className="product-details-tags">
        Tags:
        {props.tags.map((item, index) => (
          <label key={index} className="product-detail-tag">
            {item}
          </label>
        ))}
      </div>
      <div className="product-detail-add-to-cart">
        {}
        <select
          id="quantity"
          className="product-detail-quantity"
          onChange={handleSelect}
        >
          {availableStock.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          disabled={checkCartQty() >= props.data.stock ? true : false}
          onClick={handleAddToCart}
          className="product-detail-add-to-cart-button"
        >
          Add to Cart
        </button>
        <p> In stock: {props.data.stock} </p>
      </div>
      <div className="product-detail-specifications">
        <h3>Specifications</h3>
        <table className="product-detail-specifications-table">
          <tbody>
            {props.data.specs.map((item, index) => (
              <tr key={index}>
                <td>{item.spec_name}</td>
                <td>{item.spec_value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductInfo;
