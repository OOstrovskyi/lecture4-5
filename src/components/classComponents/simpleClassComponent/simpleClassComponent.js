import React, { Component } from 'react';
import './simpleClassComponent.css';

export default class SimpleClassComponent extends Component {

    static displayName = 'WannaChangeThisName';

    static getDerivedStateFromProps(props, state) {
        console.log('Call____getDerivedStateFromProps');
        return null;
    }

    constructor(props){
        super(props);
        this.state = {
            someValue: 'I`m some state value'
        };
        console.log('Call____constructor');
    }

    render() {
        console.log('Call____render');
        return (
            <div className="simpleClassComponent">
                <h3>I am Class Component</h3>
            </div>
        );
    }

    componentDidMount() {
        console.log('Call____componentDidMount');
    }
}
