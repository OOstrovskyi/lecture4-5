import React from 'react';
import PropTypes from 'prop-types';

import { Preloader } from '../../../functionalComponents/Preloader';

import './styles.css';

const TextButton = ({ ...props }) => {
  const {
    onClick,
    disabled,
    style,
    children,
    loading,
    content,
    className,
  } = props;
  return (
    <button
      className={`myTextButton ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {loading ? <Preloader /> : content}
      {children}
    </button>
  );
};

TextButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  style: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

TextButton.defaultProps = {
  loading: false,
  children: null,
  content: '',
  className: '',
};

export default TextButton;
