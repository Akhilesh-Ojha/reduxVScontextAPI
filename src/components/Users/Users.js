import React from 'react';
import User from './User/User'

const users = (props) => props.users.map((user , index) => {
    return (
        <div className="person">
            <User  
                name={user.name} 
                isAuthUser={props.isAuth}>
            </User>
        </div>
   )
});

export default users;
