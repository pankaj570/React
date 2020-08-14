import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { name: 'pankaj', age: 20 }
    ],
    otherData: 'other data'
  }
  updateStateHandler = (newName, newAge) => {
    this.setState({
      person: [
        { name: newName, age: newAge }
      ],
      otherData: 'Data will be changed when clicked on button'
    })
  }

  changeHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: 14 }
      ],
      otherData: 'Data will be changed when clicked on button'
    })
  }

  render() {
    const style = {
    backgroundColor:'brown',
    font:'inherit',
    margin:'auto'
  };

  return(
      <div className = "App" >
      <h1>This first react App!</h1>
      <p>I am working on react js</p>
      <button 
      style={style}
      onClick={this.updateStateHandler.bind(this, 'Pankaj1', 20)}>Update State</button>
      <Person
        name={this.state.person[0].name}
        age={this.state.person[0].age}
        click={this.updateStateHandler.bind(this, 'Pankaj2', 20)}
        change={this.changeHandler}
      />
      </div>

      // React.createElement('div',{className: 'App'},React.createElement('h1',null,'pankaj'))
    );
  }

}

export default App;
