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
    let convertedAgeInYears = 0;

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

  isStillAlive(){
    let ageInYears = this.ageInSeconds() / 31536000;
    return (this.lifeExpectancy > ageInYears);
  }

}
