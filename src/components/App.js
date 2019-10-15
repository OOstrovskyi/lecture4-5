import React from 'react';

// import createDiv from '../components/reactCreateElement';

// import { ContainerComponent } from './propsAndState';
// import { SimpleClassComponent } from './classComponents/simpleClassComponent';
// import { SimpleFunctionalComponent } from './functionalComponents/simpleFunctionalComponent';
// import { DecoratedClassComponent } from './classComponents/decoratedClassComponent';
// import { Preloader } from './functionalComponents/Preloader';
import Button, { TextButton } from '../components/hoc/Buttons';


// import { 
//     WrapperComponent,
//     ImageComponent, 
//     TextComponent,
//     CardComponent,
//     Dragable,
// } from '../components/composition';

// import { ParentComponent, ChildComponent } from './inheritance';

// import { Button, TextField } from '@material-ui/core';

import StateComponent from  '../statenprops/state/stateComponent';

import './app.css';

export default function App() {
    return (
        <div className="app">
            <StateComponent />
        </div>
    );
}
