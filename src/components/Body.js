import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Body({ onClick }) {
  const handleClick = (name) => {
    onClick(name);
  };

  return (
    <div className="body">
      <Button onClick={() => handleClick('AC')} name="AC" className="reset" />
      <Button onClick={() => handleClick('+/-')} name="+/-" className="opration" />
      <Button onClick={() => handleClick('%')} name="%" className="opration" />
      <Button onClick={() => handleClick('7')} name="7" className="number" />
      <Button onClick={() => handleClick('8')} name="8" className="number" />
      <Button onClick={() => handleClick('9')} name="9" className="number" />
      <Button onClick={() => handleClick('4')} name="4" className="number" />
      <Button onClick={() => handleClick('5')} name="5" className="number" />
      <Button onClick={() => handleClick('6')} name="6" className="number" />
      <Button onClick={() => handleClick('1')} name="1" className="number" />
      <Button onClick={() => handleClick('2')} name="2" className="number" />
      <Button onClick={() => handleClick('3')} name="3" className="number" />

    </div>
  );
}
Body.propTypes = {
  onClick: PropTypes.func,
};

Body.defaultProps = {
  onClick: () => {},
};

export default Body;
