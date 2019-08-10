import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: [
      {name: 'This is me Victory'},
      {name: 'This is Link'},
      {name: 'CHANGE MEEEE'}
    ]
  }

  inputUserNameHandler = (event) =>(
    this.setState({
      userName: [
        {name: 'This is me Victory'},
        {name: 'This is Link'},
        {name: event.target.value}
      ]
    })
  )

  switchUserNameHandler = (newName) =>(
    this.setState({
      userName: [
        {name: newName},
        {name: 'Arrows'},
        {name: 'Poof'}
      ]
    })
  ) 



  render() {
    //Inline Style should be inside the RENDER function

    const style = {
      backgroundColor: 'green',
      font:'inherit',
      border: '3px solid grey',
      boxShadow: '0 2px 3px',
      padding: '8px',
      borderRadius: '10px'
    };
    // End of inline style... Add to whatever you want
    return (
      <div className='App'>
      <h1>Assignment 1</h1>
      <button 
        style={style}
        onClick={this.switchUserNameHandler.bind(this,'CRUD')}>Click to activate handler</button>
        <UserInput 
          name={this.state.userName[2].name}
          changed={this.inputUserNameHandler}/>
        <UserOutput 
          name={this.state.userName[0].name}
          click={this.switchUserNameHandler.bind(this,'MOOOOO')}/>
        <UserOutput 
          name={this.state.userName[1].name}/>
      </div>
    );
  }
}

export default App;
