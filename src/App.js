import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 0, name: 'Arthur', age: '22'},
      {id: 1, name: 'Annie', age: '25'},
      {id: 2, name: 'Leo', age: '12'}
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState(
      {showPersons: !this.state.showPersons}
    )
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    
    if(this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
           click = {() => this.deletePersonHandler(index)}
           name={person.name} 
           age={person.age}
           key={person.id}
           changed = {(event) => this.nameChangeHandler(event, person.id)}/>
        })}
      </div>
      )
    } 




     
    return (
      <div className="App">
        <h1>Hi components who are you?</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>
        {!this.state.showPersons ? 'Show Persons' : 'Hide Persons'}
        </button>
        {persons}
      </div>
    )
  }
}

export default App;
