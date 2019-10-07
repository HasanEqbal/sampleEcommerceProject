import { ADD_TO_BAG } from "../actions/type";

const INTIAL_CART = {
  cartItems: []
};
export default (state = INTIAL_CART, action) => {
  switch (action.type) {
    case ADD_TO_BAG:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
