 
 import { ADD_PRODUCT_TO_CART,RMOVE_PRODUCT_FROM_CART } from "./types";
 export const  addToCart =(items,product) => (dispatch)=>{
   
        const cartItems=items.slice();
        let productAlreadyExist=false;
    
        cartItems.forEach(item => {
          if (item.id === product.id){
            productAlreadyExist=true;
           item.count++;
          }
        });
        if (!productAlreadyExist){
          cartItems.push({...product,count:1});
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
        return dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload:{
                cartItems:cartItems
            }
        })
      }

}


export const removeFromCart=(items,product) =>(dispatch)=>{

    const cartItems=items.slice().filter(el => el.id !== product.id);

    localStorage.setItem('cartItems',JSON.stringify(cartItems) );

  return dispatch({
    type: RMOVE_PRODUCT_FROM_CART,
  payload:{
    cartItems
  }
  })
    }
