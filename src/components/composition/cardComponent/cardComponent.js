import React from 'react';

import './cardComponent.css';

export default function CardComponent(props) {
  const { left, right } = props;
    return (
        <div className="cardComponent">
            <div className="leftSlot">
                {left}
            </div>
            <div className="rightSlot">
                {right}
            </div>
        </div>
    );
};
