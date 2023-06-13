import Button from './Button';
import Body from './Body';

function Calculator() {
  return (
    <div className="container">
      <Button name="0" className="result" />
      <Body />
      <Button name="/" className="opration" />
      <Button name="x" className="opration" />
      <Button name="-" className="opration" />
      <Button name="+" className="opration" />
      <Button name="=" className="opration" />
      <Button name="." className="opration" />
      <Button name="0" className="number" />

    </div>

  );
}
export default Calculator;
