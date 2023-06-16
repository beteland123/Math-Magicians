import { useState } from 'react';
import Button from './Button';
import Body from './Body';
import calculate from '../logic/calculate';
import Quate from './Quot';

function Calculator() {
  // useState hook  to add state to functional components. It takes an initial value as an argument
  const [count, setCount] = useState({ total: null, next: null, operation: null });
  const handleClick = (name) => {
    // returns an array two elements: the current state value and a function to update the state
    setCount(calculate(count, name));
  };
  return (
    <div>
      <div className="container">

        <input
          type="text"
          readOnly
          value={count.next || count.total || '0'}
          className="result"
        />

        <Body onClick={() => handleClick()} count={count} setCount={setCount} />
        <Button onClick={() => handleClick('÷')} name="÷" className="opration" />
        <Button onClick={() => handleClick('x')} name="x" className="opration" />
        <Button onClick={() => handleClick('-')} name="-" className="opration" />
        <Button onClick={() => handleClick('+')} name="+" className="opration" />
        <Button onClick={() => handleClick('=')} name="=" className="opration" />
        <Button onClick={() => handleClick('.')} name="." className="opration" />
        <Button onClick={() => handleClick('0')} name="0" className="number" />

      </div>
      <Quate />
    </div>
  );
}
export default Calculator;
