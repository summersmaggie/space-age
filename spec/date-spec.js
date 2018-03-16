import { Date } from  '../src/date.js';

describe('Date', function() {
  it('should test whether an input has three lines', function() {
    let newHaiku = new Haiku("lineOne", "lineTwo", "lineThree")
    expect(newHaiku.lineOne).toEqual("lineOne")
    expect(newHaiku.lineTwo).toEqual("lineTwo")
    expect(newHaiku.lineThree).not.toEqual(" ")
  });
});
