import React from 'react';

import './textComponent.css';

export default function TextComponent(props) {
  const { text } = props;
  return (
    <div className="textHolder">
      <p>{text}</p>
    </div>
  );
};

TextComponent.defaultProps = {
  text: `
  Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation`,
};
