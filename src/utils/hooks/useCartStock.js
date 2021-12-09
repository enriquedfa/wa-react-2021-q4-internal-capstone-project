import { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../../state/CartContext";

function useCartStock(product) {
  const { state } = useContext(CartContext);
  const [cartQty, setCartQty] = useState(0);
  const [stockQuantity] = useState(product.data.stock);
  const [hasStock, setHasStock] = useState(true);

  useEffect(() => {
    if (state.cart.length > 0) {
      const cartItem = state.cart.find((item) => item.id === product.id);
      if (cartItem) {
        setCartQty(cartItem.quantity);
      }
    }
  }, [product.id, state.cart]);

  useEffect(() => {
    if (cartQty >= stockQuantity) {
      setHasStock(false);
    }
  }, [cartQty, stockQuantity]);

  return {
    cartQty,
    hasStock,
  };
}

export default useCartStock;
