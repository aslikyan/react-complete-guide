import React from 'react';
import './Person.css';

const person = (props) => {
    return(
        <div className="Person">
        <h2  onClick={props.click}>Hi I'm a {props.name}, and I'm a {props.age} years old</h2>
        <h3>And {props.children}</h3>
        <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;