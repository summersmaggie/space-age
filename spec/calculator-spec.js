import { Calculator } from  '../src/calculator.js';

describe('Calculator', function() {
  it('should test whether user inputs a birthday', function() {
    let calculator = new Calculator('12-17-1995')
    expect(calculator.birthday).toEqual('12-17-1995');
  });

  it('should an age and convert to seconds', function() {
    let calculator = new Calculator('1995-12-17T03:40:00+00:00')
    expect(calculator.dateToSeconds('1995-12-17T03:40:00+00:00')).toEqual(819171600)
  });


});
