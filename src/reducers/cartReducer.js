import {ADD_PRODUCT_TO_CART,RMOVE_PRODUCT_FROM_CART} from "../actions/types";
const initialState={items:[]};

export default function (state=initialState,action){
  switch (action.type){

  case ADD_PRODUCT_TO_CART:
    return{
        items: action.payload.cartItems
    }
    case RMOVE_PRODUCT_FROM_CART:
      return { ...state, items: action.payload.cartItems };
  default:
    return state;

  }
}