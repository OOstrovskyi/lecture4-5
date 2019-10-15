import React, { Component } from 'react'

export default class ChangeState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
    }

    changeState = () => {
        this.setState({ counter:  this.state.counter + 1 });
        // this.setState({ counter:  this.state.counter + 1 });
        // this.setState({ counter:  this.state.counter + 1 });
    }

    // changeState = () => {
    //     this.setState(
    //         { counter:  this.state.counter + 1 },
    //         () => (console.log('STATE WAS CHANGED'))
    //     );
    //     this.setState(
    //         { counter:  this.state.counter + 1 },
    //         () => (console.log('STATE WAS CHANGED'))
    //     );
    //     this.setState(
    //         { counter:  this.state.counter + 1 },
    //         () => (console.log('STATE WAS CHANGED'))
    //     );
    // }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.changeState}>Click Me</button>
            </div>
        )
    }
}
