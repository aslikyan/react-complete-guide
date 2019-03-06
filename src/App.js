import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Arthur', age: '22'},
      {name: 'Annie', age: '25'},
      {name: 'Leo', age: '12'}
    ],
  })
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'John', age: '12'},
        {name: 'Juliana', age: '14'},
        {name: 'Sophie', age: '13'}
      ],
    })
  }
  return (
    <div className="App">
      <h1>Hi components who are you?</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  )
}

export default app
