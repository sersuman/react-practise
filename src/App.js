import React, { Component } from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
             name: "JavaPoint",
        }
    }
    
    render() {
        return (
            <div>
                <JTP jtpProp = {this.state.name}/>
            </div>
        );
    }
}
class JTP extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    State & Props Example
                </h1>
                <h3> This is prop {this.props.jtpProp}</h3>
                <p> JavaTPoint is not one of the best</p>
            </div>
        );
    }
}

export default App;
