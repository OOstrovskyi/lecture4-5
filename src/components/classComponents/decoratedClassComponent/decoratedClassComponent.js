import React, { Component } from 'react';

import { withSimpleDecorator } from '../../decorators'

import './decoratedClassComponent.css';

@withSimpleDecorator
class DecoratedClassComponent extends Component {

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
                <h3>I am Decorated Class Component</h3>
            </div>
        );
    }

    componentDidMount() {
        console.log('Call____componentDidMount');
    }
}

export default DecoratedClassComponent;
