import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('test button', () => {
  it('should render the correct name and class', () => {
    render(<Button name="Test" className="test-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Test');
    expect(button).toHaveClass('test-class');
  });
});
