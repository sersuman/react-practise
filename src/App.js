import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "Welcome to Javapoint"
        };
        this.updateSetState = this.updateSetState.bind(this);

    }

    updateSetState(){
        this.setState({
            msg: "I am best react js "
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateSetState}>Set state</button>
            </div>
        );
    }
}

export default App;