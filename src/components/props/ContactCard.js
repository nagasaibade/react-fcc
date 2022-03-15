import React from "react";

const ContactCard = (props) => {

    console.log(props);
    return (

         <div className='contact-card'>
            <img src={props.contact.imageUrl} alt='' />
            <h3>{props.contact.name}</h3>
            <p>Phone : {props.contact.phone} </p>
            <p>Email : {props.contact.email}</p>
        </div>
  );
}


export default ContactCard