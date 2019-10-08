import React from 'react';

import { SimpleClassComponent } from './classComponents/simpleClassComponent';
import { SimpleFunctionalComponent } from './functionalComponents/simpleFunctionalComponent';
import { DecoratedClassComponent } from './classComponents/decoratedClassComponent';
import { WrapperComponent } from './composition/wrapperComponent';
// import { Preloader } from './functionalComponents/Preloader';
// import Button, { TextButton } from '../components/hoc/Buttons';

import './app.css';

export default function App() {
    return (
        <div className="app">
            <SimpleClassComponent />

            <SimpleFunctionalComponent />

            <DecoratedClassComponent />

            <WrapperComponent>
                <SimpleFunctionalComponent />
            </WrapperComponent>

            {/* <Preloader />  */}
            {/* <Button /> */}
        </div>
    );
}
