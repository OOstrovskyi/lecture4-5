import React from 'react';

import createDiv from '../components/reactCreateElement';

import { SimpleClassComponent } from './classComponents/simpleClassComponent';
import { SimpleFunctionalComponent } from './functionalComponents/simpleFunctionalComponent';
import { DecoratedClassComponent } from './classComponents/decoratedClassComponent';
// import { Preloader } from './functionalComponents/Preloader';
// import Button, { TextButton } from '../components/hoc/Buttons';


// import { 
//     WrapperComponent,
//     ImageComponent, 
//     TextComponent,
//     CardComponent
// } from '../components/composition';

import { ParentComponent, ChildComponent } from './inheritance';

import './app.css';

export default function App() {
    return (
        <div className="app">

            {/* {createDiv()} */}
            
            {/* <SimpleClassComponent /> */}

            {/* <SimpleFunctionalComponent /> */}

            {/* <DecoratedClassComponent /> */}

            {/* <WrapperComponent>
                <SimpleFunctionalComponent />
            </WrapperComponent> */}

            {/* <Preloader />  */}
            {/* <Button /> */}
            {/* <WrapperComponent>
                <CardComponent 
                    left={<ImageComponent />}
                    right={<TextComponent />}
                />
            </WrapperComponent> */}
            <ChildComponent />
            <ParentComponent />
        </div>
    );
}
