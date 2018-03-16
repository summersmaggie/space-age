import { Date } from  '../src/date.js';

describe('Date', function() {
  it('should test whether a date has a birthdate and age', function() {
    let newDate = new Date("1988-03-09", "30")
    expect(newDate.birthdate).toEqual("1988-03-09");
    expect(newDate.age).toEqual("30")
  });

  it ('takes a year and converts it to seconds', function() {
    let newDate = new Date("birthdate", "30")
    expect(newDate.yearToSeconds("30")).toEqual(946080000)
  });

  it('takes two date and determines the difference between those dates', function() {
    let date1 = new Date("birthdate", "30")
    let date2 = new Date("birthdate", "20")
    let date1Seconds = date1.yeartoSeconds("30")
    let date2Seconds = date2.yearToSeconds("20")
    expect(date2seconds - date1seconds).toEqual(315360000)
    )
  })

});
