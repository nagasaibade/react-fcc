import React from 'react'


function Joke(props){



    let styles = { display : !props.joke.question && "none",
                    color : 'red' 
                }
    return (
        <div className="joke" >
            <p style = { styles }> Question :{props.joke.question}</p>
            <p> Joke : {props.joke.punchLine}</p>
        </div>
    )
}

export default Joke