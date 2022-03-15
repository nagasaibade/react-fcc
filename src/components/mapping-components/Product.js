import React from "react";


const Product = (props) => {

    return (
        <div>
            Item : {props.product.name}<br/>
            Price : {props.product.price}
            <br/>
            <br/>
        </div>
    )
}

export default Product