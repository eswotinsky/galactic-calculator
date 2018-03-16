import {galacticAge} from './../src/galacticAge.js'

describe ('galacticAge', function(){
  let testGalacticAge;

  beforeEach(function(){
    testGalacticAge = new galacticAge('2018-01-01');
  });

  it('should test whether a passed birthday is stored as a parameter', function(){
    expect(testGalacticAge.birthday).toEqual('2018-01-01')
  })

  it('should test whether ageInSeconds returns the diff between the stored birthday and current datetime', function(){
    let currentDateTime = new Date().getTime()
    let birthdayDateTime = new Date(testGalacticAge.birthday);
    expect(testGalacticAge.ageInSeconds()).toEqual((currentDateTime - birthdayDateTime ) / 1000)

  })
});
