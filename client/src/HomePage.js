import React, { Component } from 'react';
import AddProduct from './AddProduct';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class HomePage extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Link to="/addproduct">Add New Product</Link>
                    <Product array={this.state.data}/>
                    <Route path="/addproduct" component={}/>
                </Router>
            </div>
        )
    }
}

export default HomePage;