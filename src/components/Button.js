import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, className, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,

};
Button.defaultProps = {
  onClick: () => {},
};

export default Button;
