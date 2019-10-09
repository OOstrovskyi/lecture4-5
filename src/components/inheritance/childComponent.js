import React, { Component } from 'react';
import ParentComponent from './parentComponent';

import './styles.css';

export default class ChildComponent extends ParentComponent {
    render() {
        return (
            <div>
                <h3>Child</h3>
                {super.render()}
            </div>
        );
    }
}
