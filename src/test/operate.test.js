import operate from '../logic/operate';

describe('test oprator', () => {
  const num1 = '10';
  const num2 = 5;
  
  test('adds two numbers correctly', () => {
    const operation = '+';
    const expectedResult = 10 + 5;
    const result = operate(num1, num2, operation);
    expect(result).toBe(expectedResult.toString());
  });

  test('it should substract correctly', () => {
    const opration = '-';
    const expectedResult = 10 - 5;
    const result = operate(num1, num2, opration);
    expect(result).toBe(expectedResult.toString());
  });

  test('it should multiply correctly', () => {
    const opration = 'x';
    const expectedResult = 10 * 5;
    const result = operate(num1, num2, opration);
    expect(result).toBe(expectedResult.toString());
  });

  test('it should divide correctly', () => {
    const opration = '÷';
    const expectedResult = 10 / 5;
    const result = operate(num1, num2, '÷');
    expect(result).toBe(expectedResult.toString());
  });

  test('it should show remainder correctly', () => {
    const opration = '%';
    const expectedResult = 10 % 5;
    const result = operate(num1, num2, opration);
    expect(result).toBe(expectedResult.toString());
  });

  test('it should handle division by zero', () => {
    expect(operate(num1, '0', '÷')).toBe("Can't divide by 0.");
  });

  test('it should handle module by zero', () => {
    expect(operate(num1, '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('it should throw an error for unknown operations', () => {
    expect(() => operate(num1, num2, 'sqrt')).toThrow("Unknown operation 'sqrt'");
  });


});
