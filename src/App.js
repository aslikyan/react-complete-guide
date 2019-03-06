import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Arthur', age: '22'},
      {name: 'Annie', age: '25'},
      {name: 'Leo', age: '12'}
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'John', age: '12'},
        {name: 'Juliana', age: '14'},
        {name: 'Sophie', age: '13'}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi components who are you?</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobby is racing</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
