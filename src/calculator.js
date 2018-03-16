export class Calculator {
  constructor(birthday, age, lifeExpectancy) {
    this.birthday = birthday;
    this.date = new Date();
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
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

  mercuryAge(age) {
    let mercuryAge = (age / 0.24);
    return mercuryAge;
  }

  venusAge(age) {
    let venusAge = Math.round((age / 0.62));
    return venusAge;
  }

  marsAge(age) {
    let marsAge = Math.round((age / 1.88));
    return marsAge;
  }

  jupiterAge(age) {
    let jupiterAge = Math.round((age / 11.86));
    return jupiterAge;
  }
}
