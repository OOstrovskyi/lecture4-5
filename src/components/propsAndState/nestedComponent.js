import React from 'react';

import './styles.css';

export default function PrintName(props) {

    const someData = 'Some data from nested';

    const onClick = (event) => (props.passDataToParent(someData));

    return(
        <p
            className="printName"
            onClick={onClick}
        >
            {props.name}
        </p>
    );
};
