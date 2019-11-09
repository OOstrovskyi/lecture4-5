import React, { Component } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class DateDifference extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate1: new Date(),
            selectedDate2: new Date(),
        };
    }
  
    handleDate1Change = date => {
        this.setState({selectedDate1: date});
    };

    handleDate2Change = date => {
        this.setState({selectedDate2: date});
    };

    render(){
        const {selectedDate1, selectedDate2} = this.state;
        const period = Math.abs(Math.round((selectedDate2-selectedDate1)/(1000*3600*24)));
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={this.state.selectedDate1}
                        onChange={this.handleDate1Change}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={this.state.selectedDate2}
                        onChange={this.handleDate2Change}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    
                </Grid>
                <Grid container justify="center">
                    <p>Period between dates is {period} days. {selectedDate2-selectedDate1<0 ? ('(first date is later than second)') : ('')  }</p>
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }
}