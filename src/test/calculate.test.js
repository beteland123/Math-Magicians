import calculate from '../logic/calculate';

describe('test the calculate', () => {
  let buttonName;
  test('it should clear ', () => {
    buttonName = 'AC';
    const obj = {
      total: 6,
      next: '4',
      operation: '+',
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });
  test('it should return nothing when 0 is button name and the next number ', () => {
    buttonName = '0';
    const obj = {
      total: 0,
      next: '0',
    };
    const expected = {};
    expect(calculate(obj, buttonName)).toEqual(expected);
  });
  test('If there is an operation, update next ', () => {
    buttonName = '3';
    const obj = {
      total: 6,
      next: '4',
      operation: '+',
    };
    const expected = {
      total: 6,
      next: obj.next + buttonName,
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });
  test('If there is no operation, update next and clear value', () => {
    buttonName = '3';
    const obj = {
      total: 6,
      next: '4',
    };
    const expected = {
      total: null,
      next: obj.next + buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual(expected);
  });
});
