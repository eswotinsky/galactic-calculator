export class galacticAge {

  constructor(birthday, lifeExpectancy) {
    this.birthday = birthday;
    this.lifeExpectancy = lifeExpectancy;
  }

  ageInSeconds() {
    let currentDateTime = new Date();
    let birthdayDateTime = new Date(this.birthday);
    return (currentDateTime.getTime() - birthdayDateTime.getTime()) / 1000; //result originally in ms, so divide by 1000
  }

  convertAge(planet) {
    const userAgeInSeconds = this.ageInSeconds();
    const secondsInAnEarthYear = 31536000;
    let convertedAgeInYears;

    switch(planet) {
      case "Mercury":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*0.24)).toFixed(2);
      break;
      case "Venus":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*0.62)).toFixed(2);
      break;
      case "Earth":
      convertedAgeInYears = (userAgeInSeconds / secondsInAnEarthYear).toFixed(2);
      break;
      case "Mars":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*1.88)).toFixed(2);
      break;
      case "Jupiter":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*11.86)).toFixed(2);
      break;
      case "Saturn":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*29.48)).toFixed(2);
      break;
      case "Uranus":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*84.07)).toFixed(2);
      break;
      case "Neptune":
      convertedAgeInYears = (userAgeInSeconds / (secondsInAnEarthYear*164.90)).toFixed(2);
      break;
      default:
      console.log("Error determining planet in switch statement");
    }
    return convertedAgeInYears;
  }

  findLifeExpectancy(planet){
    let foundLifeExpectancy;

    switch(planet) {
      case "Mercury":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 0.24);
      break;
      case "Venus":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 0.92);
      break;
      case "Earth":
      foundLifeExpectancy = this.lifeExpectancy * (1.00);
      break;
      case "Mars":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 1.88);
      break;
      case "Jupiter":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 11.86);
      break;
      case "Saturn":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 29.48);
      break;
      case "Uranus":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 84.07);
      break;
      case "Neptune":
      foundLifeExpectancy = this.lifeExpectancy * (1 / 164.90);
      break;
      default:
      console.log("Error determining life expectancy");
    }
    return foundLifeExpectancy.toFixed(2);
  }

  findRemainingLife(planet) {
    return (this.findLifeExpectancy(planet) - this.convertAge(planet)).toFixed(2);
  }

  isStillAlive(){
    let ageInYears = this.ageInSeconds() / 31536000;
    return (this.lifeExpectancy > ageInYears);
  }

}
