import { useState } from 'react';
import Button from './Button';
import Body from './Body';
import calculate from '../logic/calculate';

function Calculator() {
  // useState hook  to add state to functional components. It takes an initial value as an argument
  const [count, setCount] = useState({ total: null, next: null, operation: null });
  const handleClick = (name) => {
    // returns an array two elements: the current state value and a function to update the state
    setCount(calculate(count, name));
  };
  return (
    <div className="container">
      <Button name={count.total || 0 || count.next} className="result" />
      <Body onClick={() => handleClick()} count={count} setCount={setCount} />
      <Button onClick={() => handleClick('÷')} name="÷" className="opration" />
      <Button onClick={() => handleClick('x')} name="x" className="opration" />
      <Button onClick={() => handleClick('-')} name="-" className="opration" />
      <Button onClick={() => handleClick('+')} name="+" className="opration" />
      <Button onClick={() => handleClick('=')} name="=" className="opration" />
      <Button onClick={() => handleClick('.')} name="." className="opration" />
      <Button onClick={() => handleClick('0')} name="0" className="number" />

    </div>

  );
}
export default Calculator;
