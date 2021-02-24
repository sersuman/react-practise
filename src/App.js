import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "Welcome to Javapoint"
        };
        this.forceUpdateState = this.forceUpdateState.bind(this);

    }

    forceUpdateState(){
        this.forceUpdate();
    }

    render(){
        return (
            <div>
                <h1>Example to generate random number</h1>
                <h3>Random number: {Math.random()}</h3>
                <button onClick={this.forceUpdateState}>Force Update</button>
            </div>
        );
    }
}

export default App;