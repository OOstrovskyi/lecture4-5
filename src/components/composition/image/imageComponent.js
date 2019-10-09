import React from 'react';

import './image.css';
import ava from '../../../assets/images/ava2.jpg'

export default function ImageComponent(props) {
  const { image } = props;
    return (
        <div className="imageHolder">
            <img
                className="avaImg"
                src={image}
                alt="image"
            />
        </div>
    );
};

ImageComponent.defaultProps = {
  image: ava,
};
