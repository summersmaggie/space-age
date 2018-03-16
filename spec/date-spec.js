import { Date } from  '../src/date.js';

describe('Date', function() {
  it('should test whether a date has an age', function() {
    let newDate = new Date("30")
    expect(newDate.age).toEqual("30")
  });

  it ('takes a year and converts it to seconds', function() {
    let newDate = new Date("30")
    expect(newDate.yearToSeconds("30")).toEqual(946080000)
  });


});
