import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, className }) {
  return (
    <button type="button" className={className}>
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,

};
export default Button;
