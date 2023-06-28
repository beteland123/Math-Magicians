import calculate from '../logic/calculate';
import operate from '../logic/operate';

// Mocking the 'operate' function for testing
jest.mock('../logic/operate', () => jest.fn());

describe('calculate', () => {
  beforeEach(() => {
    operate.mockClear();
  });

  test('AC button should return initial calculator data', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('Number button should update next value', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '52', operation: '+' });
  });

  test('Operation button should update operation and calculate total if necessary', () => {
    operate.mockImplementation(() => '15');
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(operate).toHaveBeenCalledWith('10', '5', '+');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });
  });

  test('Equal button should calculate total when next and operation are present', () => {
    operate.mockImplementation(() => '20');
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(operate).toHaveBeenCalledWith('10', '5', '+');
    expect(result).toEqual({ total: '20', next: null, operation: null });
  });

  test('Operation button after equal should update operation and reset next', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '-');
    expect(result).toEqual({ total: '10', next: null, operation: '-' });
  });

});
