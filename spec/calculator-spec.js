import { Calculator } from  '../src/calculator.js';

describe('Calculator', function() {
  it('should test whether user inputs a birthday', function() {
    let calculator = new Calculator('12-17-1995')
    expect(calculator.birthday).toEqual('12-17-1995');
  });


});
