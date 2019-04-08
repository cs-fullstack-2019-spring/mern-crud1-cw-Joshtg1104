import React, { Component } from 'react';

class AddProduct extends Component{

    productDataAdd=(e)=>{
        e.preventDefault();
        fetch('/addproduct', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productID: e.target.productID.value,
                price: e.target.price.value,
                quantity: e.target.price.value,
            }),
        })
            .then()
    };

    render(){
        return(
            <div>
                <form onSubmit={this.productDataAdd}>
                    <label htmlFor="productID">Product ID:</label>
                    <input type="text" id="productID" name="productID"/>
                    <label htmlFor="price">Product Price:</label>
                    <input type="text" id="price" name="price"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default AddProduct;

