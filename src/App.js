import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi components who are you?</h1>
        <Person name = 'Arthur' age = '22' />
        <Person name = 'Annie' age = '25'>My hobby is racing</Person>
        <Person name = 'Leo' age = '12' />
      </div>
    );
  }
}

export default App;
