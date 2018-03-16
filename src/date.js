export class Date {
  constructor(birthdate, age) {
    this.birthdate = birthdate;
    this.age = age;
  }

  yearToSeconds(age) {
    let ageInt = parseInt(age);
    let seconds = (ageInt * 365 * 24 * 60 * 60);
    return seconds
  }
}
