import React from 'react'

class StateConcept extends React.Component{

    constructor()
    {
        super()
        this.state ={
            answer : 'yes'
        }
    }

    

    render(){
        const style = {
            color : 'purple',
            backgroundColor: 'green',
            padding:'10px',
            border :'10px'

        }

        return (
            <h1 style={style}>
                Hi ra Sai ela vunnav? this is state in react {this.state.answer}
            </h1>
        )
    }

}

export default StateConcept