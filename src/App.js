import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Products from './components/Products';
import Filter from './components/Filter';
import Bascket from './components/Bascket';
import store from './store'
import { Provider } from 'react-redux';

class App extends Component {

componentWillMount(){

}


  render(){
  return (
<Provider store={store}>
    <div className="container">
      <h1>SHOOPING CART APPLICATION</h1>
    <hr/>
    <div className='row'>
<div className='col-md-8'>
<Bascket />
<Filter />
        <hr/>
<Products />
   </div>
    </div>

    </div>
    </Provider>
  );
}}

export default App;
