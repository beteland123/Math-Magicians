import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, name, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,

};
Button.defaultProps = {
  onClick: () => {},
  name: '',
};

export default Button;
