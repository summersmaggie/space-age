import { Date } from  '../src/date.js';

describe('Date', function() {
  it('should test whether a date has a birthdate and age', function() {
    let newDate = new Date("1988-03-09", "30")
    expect(newDate.birthdate).toEqual("1988-03-09");
    expect(newDate.age).toEqual("30")
  });

  it ('takes a year and converts it to seconds', function () {
    let newDate = new Date("birthdate", "30")
    expect(newDate.yearToSeconds("30")).toEqual(946080000)
  });

});
