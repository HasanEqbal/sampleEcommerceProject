import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import cartItems from './cartItems';

export default combineReducers({
  form: formReducer,
  user: userReducer,
  cartItems: cartItems
});
