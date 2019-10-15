import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export default class ComtrolledComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    handleChange = (e) => {
        console.log('FIELD_NAME', e.target.name);
        console.log('FIELD_VALUE', e.target.value);
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <TextField
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
        );
    }
};
