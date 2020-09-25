import React from 'react';
import './User.css';

const user = (props) => {
    return(
        <div className="user">
            <p>{props.name}</p>
            <p>Authentication Status: {props.isAuthUser.toString().toUpperCase()}</p>
        </div>
    ); 
}

export default user;