import { Date } from  '../src/date.js';

describe('Date', function() {
  it('should test whether a user has a birthdate', function() {
    let newDate = new Date("birthdate")
    expect(newDate).toEqual("1988-03-09")
  });
});
