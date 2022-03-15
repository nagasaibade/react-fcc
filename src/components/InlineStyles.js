import React from 'react'


const InlineStyle = () => {
    let wishMessage = '';
    let style = {
        "background-color": 'white'
    }

    const date = new Date();
    if(date.getHours() > 16 && date.getHours() < 19  )
    {
        wishMessage = "Evening";
        style.color = 'purple'
    }
    else if(date.getHours() >= 12 && date.getHours() < 15  )
    {
        wishMessage = 'Afternoon';
        style.color = 'Orange'
    }
    else if(date.getHours() >= 19 && date.getHours() <= 24 )
    {
        wishMessage = 'Night'
        style.color = 'pink'
    }
     
   return ( <h1 style={style}>Inline Line styles (This text Color will change based on Time). This is {wishMessage}</h1>)
}

export default InlineStyle;