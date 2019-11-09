import React, { Component } from 'react';
//import { TextField } from '@material-ui/core';

export default class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            patronymic: '',
            fullName: '',
        };
    }

    firstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    }

    secondNameChange = (e) => {
        this.setState({ secondName: e.target.value });
    }

    patronymicChange = (e) => {
        this.setState({ patronymic: e.target.value });
    }


    render() {
        const {firstName, secondName, patronymic} = this.state;
        let fullName = secondName+' '+firstName+' '+patronymic;

    

        return (
            <div>
                Fisrt Name: <input type="text" value={firstName} onChange={this.firstNameChange} />
                Second Name: <input type="text" value={secondName} onChange={this.secondNameChange} />
                Patronymic: <input type="text" value={patronymic} onChange={this.patronymicChange} />
                <p>Your full name is <strong>{fullName}</strong> </p>
            </div>
            
        );
    }
};
