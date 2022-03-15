import React from "react";
import StateTodoApp from './todo-with-state/StateTodoApp'

class StatePractice1 extends React.Component{


    constructor(){
        super();
        this.state ={
            renderingText : '',
            count :0
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler()
    {
        
        this.setState((prvState) => {
            return{
                count : prvState.count + 1
            }
        })
        console.log('inside the change handler');
    }

    render()
    {
        return(
            <div>
                <h1>Practicing state on 8 march 2022 10 : 38 PM IST(Restarted React)</h1>
                <h2>we will show text based on current component state</h2> 
                <h3>{this.state.count}</h3>
                <button onClick={this.clickHandler}>Change</button> 

                <hr/>
                <h2>From now on we will try to do toto app</h2>    
                <StateTodoApp />        
            </div>
        )
    }
}

export default StatePractice1