export class galacticAge {


  constructor(birthday) {
    this.birthday = birthday;
  }

  ageInSeconds(birthday) {
    let currentDateTime = new Date();
    let birthdayDateTime = new Date(birthday);
    return (currentDateTime.getTime() - birthdayDateTime.getTime()) / 1000; //result originally in ms, so divide by 1000
  }

  // convertAge(planet) {
  //     let ageOnPlanet =
  //
  //     switch(planet) {
  //         case "Mercury":
  //             //stuff
  //             break;
  //         case "Venus":
  //             //stuff
  //             break;
  //         case: "Mars":
  //             //stuff
  //             break;
  //         case: "Jupiter":
  //             //stuff
  //             break;
  //          case: "Saturn":
  //              //stuff
  //              break;
  //          case: "Uranus":
  //              //stuff
  //              break;
  //          case: "Neptune":
  //              //stuff
  //              break;
  //         default:
  //             console.log("Error determining planet in switch statement");
  //     }
  //
  //     return ageOnPlanet
  // }



}
