import React from 'react';

import { SimpleClassComponent } from './classComponents/simpleClassComponent';
import { SimpleFunctionalComponent } from './functionalComponents/simpleFunctionalComponent';
import { DecoratedClassComponent } from './classComponents/decoratedClassComponent';

import './app.css';

export default function App() {
    return (
        <div className="app">
            <SimpleClassComponent />
            <SimpleFunctionalComponent />
            <DecoratedClassComponent />
        </div>
    );
}
