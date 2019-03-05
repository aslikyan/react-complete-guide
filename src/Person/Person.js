import React from 'react';

const person = (props) => {
    return(
        <div>
        <h2>Hi I'm a {props.name}, and I'm a {props.age} years old</h2>
        <h3>And {props.children}</h3>
        </div>
    )
}

export default person;