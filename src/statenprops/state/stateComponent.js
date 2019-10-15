import React, { Component } from 'react';
import { 
    WrapperComponent,
    ImageComponent, 
    TextComponent,
    CardComponent,
    Dragable,
} from '../../components/composition';

import { Preloader } from '../../components/functionalComponents/Preloader';

import spiner from '../../assets/images/spiner1.gif';

export default class stateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: spiner, // don't forget to change to null
            text: 'Loading...',
        }
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             image: 'https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg',
    //             text: 'Bla bla bla',
    //         });
    //     }, 3000);
    // }

    render() {
        return (
            <CardComponent 
                left={<ImageComponent image={this.state.image} />}
                right={<TextComponent text={this.state.text} />}
            />
        );
    }
}
