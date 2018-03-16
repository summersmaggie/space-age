export class Calculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.date = new Date();
  }

  dateToSeconds(birthday) {
    const birthdate = new Date(birthday);
    let milliseconds = birthdate.getTime();
    let seconds = milliseconds / 1000;
    return seconds;
  }

  findAge(birthday, date) {
    const birthdayInSeconds = Math.round(new Date(birthday).getTime()/1000);
    let dateInSeconds = Math.round(new Date(date).getTime()/1000);
    let ageInSeconds = dateInSeconds - birthdayInSeconds;
    console.log(ageInSeconds);
    return ageInSeconds;
  }

  spaceAge() {
    
  }

}
