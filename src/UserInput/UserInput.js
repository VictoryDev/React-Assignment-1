import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return(
    <div className="UserInput">
        <p>nameChangeHandler should change this => {props.name}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default userInput;