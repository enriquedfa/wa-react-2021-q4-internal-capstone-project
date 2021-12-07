import { useContext } from "react";
import CartContext from "../../state/CartContext";
import CartItem from "../CartItem/CartItem";
import { useCartProducts } from "../../utils/hooks/useCartProducts";

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  const { data: cartProducts, isLoading: cartProductsLoading } =
    useCartProducts(state.cart.map((item) => item.id));

  function onChangeQuantity(id, quantity) {
    dispatch({
      type: "UPDATE_CART",
      payload: {
        id,
        quantity,
      },
    });
  }

  function onRemoveItem(id) {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  function getStock(product) {
    return cartProducts.results?.find((item) => item.id === product.id).data
      .stock;
  }

  function calculateTotal() {
    return state.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <div className="shopping-cart__header__title">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      <div className="shopping-cart__body">
        {state.cart.length === 0 ? (
          <div className="shopping-cart__body__empty">
            <h2>Your cart is empty</h2>
            <p>
              You have no items in your shopping cart. To buy one or more items,
              click on the "Add to Cart" button next to the item.
            </p>
          </div>
        ) : cartProductsLoading ? (
          <div className="shopping-cart__body__loading">
            <h2>Checking Stock...</h2>
          </div>
        ) : (
          <div className="shopping-cart__body__items">
            {state.cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                stock={getStock(item)}
                onRemoveItem={onRemoveItem}
                onChangeQuantity={onChangeQuantity}
              />
            ))}
          </div>
        )}
      </div>
      <div className="shopping-cart__footer">
        <div className="shopping-cart__footer__total">
          <h2>Total</h2>
          <p>$ {calculateTotal()}</p>
          <button disabled={state.cart.length === 0}>Checkout</button>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
