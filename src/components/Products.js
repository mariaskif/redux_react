import React, { Component } from 'react'
import util from '../util'
import {connect} from 'react-redux'
import { featchProducts } from '../actions/productsActions'
import { addToCart } from '../actions/cartActions'
class Products extends Component {



  componentDidMount(){
    this.props.featchProducts();
  }

  render() {
    const productItem=this.props.products.map(product=>(
      <div className='col-md-4' key={product.id}>
      <div className="thumbnail text-center">
        <a href={`#${product.id}`} onClick={()=> this.props.addToCart(this.props.cartItems,product)}>
       <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
      <p>{product.title}</p>
       </a>
      </div>
      <div>
      <b>
        {util.formatCurrency(product.price)}
      </b>
        <button className='btn btn-primary' onClick={()=> this.props.addToCart(this.props.cartItems,product)} >Add To Cart</button>
      </div>
      </div>));
    return (
    
        <div className='row'>
        {productItem}
        </div>
    )
  }
}
const mapStateToProps=(state) =>(
  
  {cartItems:state.cart.items,
    products: state.products.filterdItems});
export default connect(mapStateToProps,{featchProducts,addToCart})(Products);