import React from "react";
import jokes from "../mapping-components/jokesData";
import Joke from "../props/props-styles/Joke";
import ChangingState from "./ChangingState";
class StatePractice extends React.Component{

    constructor(){
        super();
        this.state = {
            isLoggedIn :true,
            jokesElement : jokes
        }
    }


    render(){



        const jokeComponent = this.state.jokesElement.map(joke => <Joke key ={joke.id} joke ={{
            question : joke.question,
            punchLine : joke.punchLine
          }}/>)
        
        return(
            <div>
            <h2 style={{color : 'blue'}}>
                You are currently Logged <span style={{color:'indigo'}}> { this.state.isLoggedIn ? 'In' : 'Out'} </span> <br/>
                Here are Jokes <br/>
             
           
            </h2>
            <h3 style={{
                backgroundColor: 'orange'
            }}>
            {jokeComponent}
            </h3>
            <hr/>
            <ChangingState />                        
            </div>
        )
    }
}

export default StatePractice