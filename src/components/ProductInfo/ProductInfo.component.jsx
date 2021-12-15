import { useState, useContext, useEffect, useCallback } from "react";
import CartContext from "../../state/CartContext";
import useCartStock from "../../utils/hooks/useCartStock";

function ProductInfo(product) {
  const { cartQty, hasStock } = useCartStock(product);
  const { state, dispatch } = useContext(CartContext);
  const [availableStock, setAvailableStock] = useState([1]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  function handleSelect(e) {
    setSelectedQuantity(Number(e.target.value));
  }

  function handleAddToCart() {
    if (selectedQuantity > availableStock.length) {
      alert("Not enough stock");
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          name: product.data.name,
          image: product.data.mainimage.url,
          price: product.data.price,
          quantity: selectedQuantity,
        },
      });
    }
    updateAvailableStock();
  }

  const updateAvailableStock = useCallback(() => {
    let stock = product.data.stock;
    let availableStock = Array.from({ length: stock }, (v, k) => k + 1);
    availableStock = availableStock.slice(0, availableStock.length - cartQty);
    setAvailableStock(availableStock);
    setSelectedQuantity(1);
  }, [cartQty, product.data.stock]);

  useEffect(() => {
    updateAvailableStock();
  }, [state.cart, updateAvailableStock]);

  return (
    <div className="product-detail-info">
      <h1>{product.data.name}</h1>
      <p className="product-detail-category">{product.data.category.slug}</p>
      <p className="product-detail-sku">SKU: {product.data.sku}</p>
      <p className="product-detail-price">${product.data.price}</p>
      <p className="product-detail-description">
        {product.data.description[0].text}
      </p>
      <div className="product-details-tags">
        Tags:
        {product.tags.map((item, index) => (
          <label key={index} className="product-detail-tag">
            {item}
          </label>
        ))}
      </div>
      <div className="product-detail-add-to-cart">
        <label className="product-detail-quantity" htmlFor="quantity">
          Quantity:
        </label>
        <select
          name="quantity"
          id="quantity"
          className="product-detail-quantity"
          onChange={handleSelect}
          value={availableStock[0]}
        >
          {availableStock.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          name="add-to-cart"
          disabled={!hasStock}
          onClick={handleAddToCart}
          className="product-detail-add-to-cart-button"
        >
          Add to Cart
        </button>
        <p> In stock: {product.data.stock} </p>
      </div>
      <div className="product-detail-specifications">
        <h3>Specifications</h3>
        <table className="product-detail-specifications-table">
          <tbody>
            {product.data.specs.map((item, index) => (
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
