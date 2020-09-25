import React, { Component } from 'react';
import './User.css';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return(
            <div className="user">
                <p>{this.props.name}</p>
                <p>Authentication Status: {this.props.auth.toString().toUpperCase()}</p>
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return {
        auth: state.isAuthenticated
    }
}

export default connect(mapStateToProps , null)(User);