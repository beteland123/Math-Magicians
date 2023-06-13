import Button from './Button';

function Body() {
  return (
    <div className="body">
      <Button name="AC" className="reset" />
      <Button name="+/-" className="opration" />
      <Button name="%" className="opration" />
      <Button name="7" className="number" />
      <Button name="8" className="number" />
      <Button name="9" className="number" />
      <Button name="4" className="number" />
      <Button name="5" className="number" />
      <Button name="6" className="number" />
      <Button name="1" className="number" />
      <Button name="2" className="number" />
      <Button name="3" className="number" />

    </div>
  );
}
export default Body;
