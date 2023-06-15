import Button from './Button';
import Body from './Body';
import calculate from '../logic/calculate';

function Calculator() {
  const handleClick = ({ name }) => {
    calculate(name);
  };
  return (
    <div className="container">
      <Button name="0" className="result" />
      <Body onClick={(name) => handleClick(name)} />
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
