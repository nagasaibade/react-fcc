import React from "react";
import ConditionalRenderingComponent from "./ConditionalRenderComponent";
class ConditionalRendering extends React.Component {

    constructor()
    {
        super();
        this.state = {
            isLoading : false
        }
    }
componentDidMount()
{
    setTimeout(() => {
        this.setState({
            isLoading : true
        })
    },1500)

    
       
}

render()
{
    return(
  
       <ConditionalRenderingComponent isLoading={this.state.isLoading} />
 
    )
}

}

export default ConditionalRendering