export class Date {
  constructor(age) {
    this.age = age;
  }

  yearToSeconds(age) {
    let ageInt = parseInt(age);
    let seconds = (ageInt * 365 * 24 * 60 * 60);
    return seconds
  }
}
