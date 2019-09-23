import { SET_CURRENT_USER } from './type';
  
  export const setUserstatus = (user) => {
    return {
      type: SET_CURRENT_USER,
      payload: user
    }; 
  };
  
  