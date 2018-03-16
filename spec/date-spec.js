import { Date } from  '../src/date.js';

describe('Date', function() {
  it('should test whether a user has entered a birthdate', function() {
    let newDate = new Date("1988-03-09")
    expect(newDate.birthdate).toEqual("1988-03-09")
  });

  it('takes an age and converts it to seconds', function() {
    let newDate = new Date("1988-03-09")
    expect(newDate.yearsToSeconds()).toEqual("946,708,560")
  });
});
