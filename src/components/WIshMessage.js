import React from "react";
import  ReactDOM  from "react";

const WishMessage = () => {
    //by default keeping morning
    let wishMessage = "Morning"

    //const date = new Date(2018,1,29,15);
    const date = new Date();
    if(date.getHours() > 16 && date.getHours() < 19  )
        wishMessage = "Evening";
    else if(date.getHours() >= 12 && date.getHours() < 15  )
        wishMessage = 'Afternoon';
    else if(date.getHours() >= 15 && date.getHours() < 19 )
        wishMessage = 'Evening'

    return (
       <div>
        <h1>
            Praise the Lord  Good { wishMessage }!!!
        </h1>
       </div>
    )

}

export default WishMessage;