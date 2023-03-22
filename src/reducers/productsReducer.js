 import { FEATCH_PRODUCTS } from "../actions/types";
 import { FELTER_PRODUCTS_BY_SIZE } from "../actions/types";
 import {ORDER_PRODUCTS_BY_PRICE} from "../actions/types";
  const initialState={item: [],filterdItems:[],size:""};

 export default function (state=initialState,action){
    switch (action.type){

    case FEATCH_PRODUCTS:
        return{...state,item: action.payload ,filterdItems:action.payload };

    case FELTER_PRODUCTS_BY_SIZE:
        return{...state, filterdItems: action.payload.item,size:action.payload.size};
          

    case ORDER_PRODUCTS_BY_PRICE:
         return{...state, filterdItems: action.payload.item, sort:action.payload.sort};
          default:
                 return state;
    }
 }