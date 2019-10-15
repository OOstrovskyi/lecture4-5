import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ButtonHOC = Comp => (
  class ButtonWraper extends Component {
    static propTypes = {
      onClick: PropTypes.func,
      loading: PropTypes.bool,
      disabled: PropTypes.bool,
      style: PropTypes.shape({}),
      content: PropTypes.string,
    }

    static defaultProps = {
      onClick: () => console.log('PROVIDE CORRECT HANDLER'),
      loading: false,
      disabled: false,
      style: {},
      content: 'Button',
    }

    onClick = (e) => {
      const { onClick } = this.props;
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }

    render() {
      return (
        <Comp
          {...this.props}
          onClick={this.onClick}
        />
      );
    }
  }
);

export default ButtonHOC;
