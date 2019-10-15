import React from 'react';

// import createDiv from '../components/reactCreateElement';

// import { ContainerComponent } from './propsAndState';
// import { SimpleClassComponent } from './classComponents/simpleClassComponent';
// import { SimpleFunctionalComponent } from './functionalComponents/simpleFunctionalComponent';
// import { DecoratedClassComponent } from './classComponents/decoratedClassComponent';
// import { Preloader } from './functionalComponents/Preloader';



// import { 
//     WrapperComponent,
//     ImageComponent, 
//     TextComponent,
//     CardComponent,
//     Dragable,
// } from '../components/composition';

// import { ParentComponent, ChildComponent } from './inheritance';

// import { Button, TextField } from '@material-ui/core';


// STATE-N-PROPS imports
import { 
    StateComponent,
    ChangeState,
    ControlledComponent,
} from  '../statenprops/state';

import Button, { TextButton } from '../components/hoc/Buttons';

import './app.css';

export default function App() {
    return (
        <div className="app">
            {/* <StateComponent /> */}

            {/* <ChangeState /> */}

            {/* <Button/> */}

            {/* <Button>
                <p>Hello</p>
            </Button> */}

            {/* <Button
                // content={<p>Hello</p>}
                // onClick={onClick}
                // style={buttonStyle}
                // className="toUpperCase"
            /> */}

            {/* <ControlledComponent /> */}
        </div>
    );
}

// function onClick() {
//     console.log('NEW ONCLICK HANDLER');
// };

// export const buttonStyle = {
//     backgroundColor: 'pink',
//     borderRadius: '50px',
//     margin: '16px',
//     outline: 0,
//     boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
// };
