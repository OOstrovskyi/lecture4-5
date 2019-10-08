import React from 'react';

import './wrapperComponent.css';

export default function WrapperComponent(props) {
  return (
    <div className="wrapperComponent">
      {props.children}
    </div>
  );
}
