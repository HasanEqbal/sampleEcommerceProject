import { SET_CURRENT_USER } from "../actions/type";

const INTIAL_STATE = {
  currentUser: null
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
