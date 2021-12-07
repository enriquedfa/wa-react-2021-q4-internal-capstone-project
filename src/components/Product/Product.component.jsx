import { Link } from "react-router-dom";
import CartContext from "../../state/CartContext";
import { useContext } from "react";

function Product({ withDescription, shortDescription, product }) {
  const { state, dispatch } = useContext(CartContext);

  function checkCartQty() {
    let cart = state.cart;
    let cartQty = 0;
    if (cart) {
      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          cartQty = parseInt(cartItem.quantity);
        }
      });
      return cartQty;
    }
  }

  return (
    <div className="product" key={product.id}>
      <img
        className="product-image"
        src={product.data.mainimage.url}
        alt={product.data.mainimage.alt}
      />
      <div className="product-info">
        <h3 className="product-name">{product.data.name}</h3>
        <p className="product-category">{product.data.category.slug}</p>
        {withDescription && (
          <p className="product-description">
            {shortDescription || "No description available"}
          </p>
        )}
        <p className="product-price">${product.data.price}</p>
        <div className="product-buttons">
          {checkCartQty() >= product.data.stock ? (
            <button className="product-button" disabled>
              Out of stock
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    name: product.data.name,
                    image: product.data.mainimage.url,
                    price: product.data.price,
                    quantity: 1,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
          <Link to={`/product/${product.id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
