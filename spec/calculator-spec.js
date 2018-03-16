import { Calculator } from  '../src/calculator.js';

describe('Calculator', function() {
  it('should test whether user inputs a birthday', function() {
    let calculator = new Calculator('12-17-1995')
    expect(calculator.birthday).toEqual('12-17-1995')
  });

  it('should take a birthdate and convert to seconds', function() {
    let calculator = new Calculator('1995-12-17T03:40:00+00:00')
    expect(calculator.dateToSeconds('1995-12-17T03:40:00+00:00')).toEqual(819171600)
  });

  it('should take two dates and find the difference between them in seconds', function() {
    let calculator = new Calculator('1995-12-17T03:40:00+00:00', new Date())
    expect(calculator.findAge('1995-12-17T03:40:00+00:00', new Date())).toEqual(Math.round(new Date().getTime()/1000) - 819171600)
  });

  it('should return age of human in Mercury years', function() {
    let test = new Calculator("30")
    expect(test.mercuryAge("30")).toEqual(125)
  });

  it('should return age of human in Venus years', function() {
    let test = new Calculator("30")
    expect(test.venusAge("30")).toEqual(48)
  });

  it('should return age of human in Mars years', function() {
    let test = new Calculator("30")
    expect(test.marsAge("30")).toEqual(16)
  });

  it('should return age of human in Jupiter years', function() {
    let test = new Calculator("30")
    expect(test.jupiterAge("30")).toEqual(3)
  })

  it('should return how many years a human has left to live on Earth', function() {
    let test = new Calculator("30", "80")
    expect(test.lifeExpectancyEarth("30", "80")).toEqual(50)
  })

  it('should return how many years a human has left to live on Mercury', function() {
    let test = new Calculator("30","80")
    expect(test.lifeExpectancyMercury("30", "80")).toEqual(-30)
  })
});
