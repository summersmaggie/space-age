export class Calculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.date = new Date();
  }

  dateToSeconds(birthday) {
    let birthdate = new Date(birthday);
    let milliseconds = birthdate.getTime();
    let seconds = milliseconds / 1000;
    return seconds;
  }
}