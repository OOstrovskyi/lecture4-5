import React from 'react';
// import PropTypes from 'prop-types';

import spiner from '../../../assets/images/spiner1.gif';

import './styles.css';

const Preloader = ({ ...scale }) => {
  const style = {
    width: `${scale}rem`,
    display: 'block',
  };
  return (
    <img
      src={spiner}
      className="myPreloader"
      alt="preloader"
      style={style}
    />
  );
};

Preloader.defaultProps = {
  scale: 1,
};

// Preloader.propTypes = {
//   scale: PropTypes.number,
// };

export default Preloader;
