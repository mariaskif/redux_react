import React, { Component } from 'react'
import { connect } from 'react-redux';
import util from '../util';
import { removeFromCart } from '../actions/cartActions';
class Bascket extends Component {
  render() {
    const {cartItems}=this.props;
    return (
      <div className='alert alert-info'>
        {cartItems.length === 0 ? "The Basket Is Empty ": <div> you have {cartItems.length} of products in your basket</div>}

       {cartItems.length > 0 &&
      <div>
     <ul>
  {cartItems.map(item =>
  <li>
    <b>{item.title}</b>
     x{item.count} ={item.price*item.count}
    <button className='btn btn-danger' onClick={()=> this.props.removeFromCart(this.props.cartItems,item)} >X</button>
  </li>
    )}
</ul>
Total Price: {util.formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count,0))}
     </div>
     } 
      </div>
    )
  }
}
 const mapToStateProps=(state)=>({
  cartItems:state.cart.items
});
 export default connect(mapToStateProps,{removeFromCart})(Bascket);