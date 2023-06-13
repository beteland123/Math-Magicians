import Button from './Button';
import Body from './Body';

function Calculator() {
  return (
    <div className="container">
      <Button name={0} />
      <Body />
      <Button name="/" />
      <Button name="x" />
      <Button name="-" />
      <Button name="+" />
      <Button name="=" />
      <Button name="." />
      <Button name="0" />

    </div>

  );
}
export default Calculator;
