import React from "react";


function ConditionalRenderingComponent (props)
{
    return (
        <div>
    { props.isLoading ?   <h1>Jesus Loves you :)</h1> : <h1>Loading...</h1>   }
    </div>
)
 
}

export default ConditionalRenderingComponent