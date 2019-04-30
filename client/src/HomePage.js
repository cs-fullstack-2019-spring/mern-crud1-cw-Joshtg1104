import React, { Component } from 'react';
import AddProduct from './AddProduct';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductCollection from "./ProductCollection";

class HomePage extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Link to="/addproduct">Add New Product</Link>
                    <ProductCollection array={this.state.data}/>
                    <Route path="/addproduct" component={AddProduct}/>
                </Router>
            </div>
        )
    }
}

export default HomePage;