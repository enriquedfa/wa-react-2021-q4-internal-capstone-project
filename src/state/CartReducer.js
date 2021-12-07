const CartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item is already in the cart
      console.log(state.cart);
      console.log(action.payload.id);
      console.log(state.cart.find((item) => item.id === action.payload.id));
      if (state.cart.find((item) => item.id === action.payload.id)) {
        // If it is, increase the quantity
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        const newCart = [...state.cart];
        newCart[index].quantity += action.payload.quantity;
        return {
          ...state,
          cart: newCart,
        };
      } else {
        // If it isn't, add it to the cart
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default CartReducer;
