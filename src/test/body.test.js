import { render } from '@testing-library/react';
import Body from '../components/Body';

describe('Body', () => {
  it('should render without errors', () => {
    const count = { total: null, next: null, operation: null };
    const setCount = jest.fn();
    expect(() => {
      render(<Body count={count} setCount={setCount} />);
    }).not.toThrow();
  });
});
