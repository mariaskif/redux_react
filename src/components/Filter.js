import React, { Component } from 'react'
import { filterProdcts ,sortProdcts} from '../actions/productsActions';
import { connect } from 'react-redux';
 class Filter extends Component {
  render() {
    return (
      <div className='row'>
        
        <div className='col-md-4'>
            {this.props.filterdProducts.length} Product Found
        </div>

        <div className='col-md-4'>
<label>
  order by
  <select className='form-control' value={this.props.sort} onChange={(e)=> {this.props.sortProdcts(this.props.filterdProducts,e.target.value);}}>
<option value=''> Select</option>
<option value='lowest'>Lowest To Highest</option>
<option value='highest'>Highest To Lowest</option>
  </select>
</label>
   </div>
         <div className='col-md-4'>
          
          <label>
            filter by size
            <select className='form-control' value={this.props.size} onChange={(e)=>this.props.filterProdcts(this.props.products,e.target.value)} >
<option value="">All</option>
<option value="X">XS</option>
<option value="S">S</option>
<option value="M">M</option>
<option value="L">L</option>
<option value="XL">XL</option>
<option value="XXL">XXL</option>
            </select>
          </label>
           </div>
      </div>
    )
  }
}
 const mapStateToProps= (state)=>({
products: state.products.item,
size:state.products.size,
sort:state.products.sort,
filterdProducts:state.products.filterdItems

 })
export default connect (mapStateToProps,{filterProdcts,sortProdcts})(Filter);