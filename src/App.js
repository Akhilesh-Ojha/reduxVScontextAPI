import React, { Component } from 'react';
import './App.css';
import Users from './components/Users/Users';

class App extends Component {

  state = {
    users: [
      {id: 1 ,name: "Akhil"},
      {id: 2 ,name: "Agam"},
      {id: 3 ,name: "Shubham"}
    ],
    isAuthenticated: false
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    })
  }


  render() {
    return (
      <div className="App">
        <h1>User Application</h1>
        <button onClick={this.loginHandler}>Login Users</button>
        <Users users={this.state.users} isAuth={this.state.isAuthenticated} />
      </div>
    );
  }  
}

export default App;
