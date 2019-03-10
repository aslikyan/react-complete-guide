import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Arthur', age: '22'},
      {name: 'Annie', age: '25'},
      {name: 'Leo', age: '12'}
    ],
    showPersons: false
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: '12'},
        {name: 'Juliana', age: '14'},
        {name: 'Sophie', age: '13'}
      ],
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Arthur', age: '12'},
        {name: event.target.value, age: '14'},
        {name: 'Sophie', age: '13'}
      ],
    })
  }
  togglePersonsHandler = () => {
    this.setState(
      {showPersons: !this.state.showPersons}
    )
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
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Trump')}
        change={this.nameChangeHandler}>My hobby is racing</Person>
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
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
