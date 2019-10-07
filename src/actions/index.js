import { SET_CURRENT_USER, ADD_TO_BAG } from "./type";

export const setUserstatus = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const addToBag = cartItems => ({
  type: ADD_TO_BAG,
  payload: cartItems
});
