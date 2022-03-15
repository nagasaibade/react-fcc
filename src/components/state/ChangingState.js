import React from "react";


class ChangingState extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
        //we are binding  changeStateCount function to current class(ChangingState)
        this.changeStateCount = this.changeStateCount.bind(this);
    }

     changeStateCount() {
       // this.state.count++

       //for changing state we cannot modify directly
       //we can use setState from super class
       // 1. for this we need to bind the functions inside this class are bind to current object(Check constructor last line for this)
       //this.setState({count : 1})
        //below one will work perfectly

        //inside function argument will be previousState
        this.setState(prvState => {
            return {
                count : prvState.count + 1
            }
        })

    }


    render(){
        return (
            <div>
            <h4>This is counter By Practicing State Changing </h4>
            <h5>Count is : { this.state.count } </h5>
            <button type="button" onMouseOver={ this.changeStateCount } onClick={ this.changeStateCount } >Click me</button>
            </div>
        )
    }
}

export default ChangingState
