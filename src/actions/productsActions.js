import { FEATCH_PRODUCTS ,FELTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "./types";


export const featchProducts=()=> (dispatch) =>{
    fetch("http://localhost:3001/products").then(res=> res.json()).then(data=>{
     dispatch({type: FEATCH_PRODUCTS , payload:data});
});

};

export const filterProdcts=(products,size)=> (dispatch) =>{

  dispatch({type: FELTER_PRODUCTS_BY_SIZE ,
     payload:{
      size:size,
      item :size ===''? products:products.filter(a=> a.availableSizes.indexOf(size)>=0 )
     }});

};

export const sortProdcts=(item,sort)=> (dispatch) =>{
     const products=item.slice();
     if(sort !== ''){
          products.sort((a,b)=> (sort === 'lowest')? (a.price > b.price ? 1 :-1):(a.price < b.price ? 1:-1));
        }else{
          products.sort((a,b)=> (a.id <b.id ? 1:-1));

        }

    return dispatch({type: ORDER_PRODUCTS_BY_PRICE ,
        payload:{
         sort:sort,
         item :products,
        },});
   };