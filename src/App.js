import React, { Component } from 'react';
import './App.css';
import Users from './components/Users/Users';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>User Application</h1>
        <button onClick={this.props.loginUser}>Login Users</button>
        <Users users={this.props.usr} />
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    usr: state.users,
    isAuth: state.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch({type: 'LOGIN_USER'})
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
