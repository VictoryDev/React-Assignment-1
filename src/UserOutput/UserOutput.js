import React from 'react'
import './UserOutput.css'

const UserOutput= (props) => {

    return(
        <div className="UserOutput">
            <h2 onChange={props.changed}>Username: {props.name}</h2>
            <p onClick={props.click}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            <p><b>{props.children}</b></p>
        </div>
    );
}

export default UserOutput;