import React, { Component } from 'react';

class ProductCollection extends Component{
    deleteProduct=(e)=>{
        fetch('/deleteproduct', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productID: e.target.productID,
            })
        })
    };

    render() {
        const mappedArray = this.props. array.map(
            (eachElement)=>{
                return(
                    <div>
                        <p>eachElement.p</p>
                    </div>
                )
            }
        )
    }
}



export default ProductCollection;

// render(){
//     const mappedArray = this.props.array.map(
//         (eachElement)=>{
//             return(<div>
//                 <p>{eachElement.studentID} {eachElement.studentName} <a href="#" name={eachElement.studentID} onClick={this.deleteStudent}>Delete</a></p>
//             </div>)
//         }
//     );
//     return(
//         <div>{mappedArray}</div>
//     );
// }
// }
