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
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi components who are you?</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Nikol')}>Switch name</button>
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
}

export default App;
