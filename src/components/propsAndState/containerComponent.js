import React, { Component } from 'react';

import NestedComponent from './nestedComponent';

import './styles.css';

export default class containerComponent extends Component {

    passDataToParent = (data='') => {
        console.log('DATA_FROM_NESTED  ', data);
    }

    render() {
        return (
            <div className="containerComponent">
                <NestedComponent
                    passDataToParent={this.passDataToParent}
                    { ...this.props } 
                />
            </div>
        );
    }
};
