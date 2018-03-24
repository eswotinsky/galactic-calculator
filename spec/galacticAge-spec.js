import {galacticAge} from './../src/galacticAge.js'

describe ('galacticAge', function(){
  let testGalacticAge;

  beforeEach(function(){
    testGalacticAge = new galacticAge('2018-01-01', 80);
  });

  it('should test whether a passed birthday is stored as a parameter', function(){
    expect(testGalacticAge.birthday).toEqual('2018-01-01')
  })

  it('should test whether a passed life expectancy is stored as a parameter', function(){
    expect(testGalacticAge.lifeExpectancy).toEqual(80)
  })

  it('should test whether ageInSeconds returns the diff between the stored birthday and current datetime', function(){
    let currentDateTime = new Date().getTime()
    let birthdayDateTime = new Date(testGalacticAge.birthday);
    expect(testGalacticAge.ageInSeconds()).toEqual((currentDateTime - birthdayDateTime ) / 1000)
  })

  it('should test whether isStillAlive returns whether stored life expectancy exceeds the stored age', function(){
    expect(testGalacticAge.lifeExpectancy > testGalacticAge.ageInSeconds() / 31536000).toEqual(true)
    expect(testGalacticAge.lifeExpectancy < testGalacticAge.ageInSeconds() / 31536000).toEqual(false)
  })

  it('should test whether convertAge contains a valid return function for each planet in the solar system', function(){
    expect(testGalacticAge.convertAge('Mercury')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Venus')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Earth')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Mars')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Jupiter')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Saturn')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Uranus')).not.toEqual(undefined)
    expect(testGalacticAge.convertAge('Neptune')).not.toEqual(undefined)
  })

  it('should test whether findLifeExpectancy contains a valid return function for each planet in the solar system', function(){
    expect(testGalacticAge.findLifeExpectancy('Mercury')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Venus')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Earth')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Mars')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Jupiter')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Saturn')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Uranus')).not.toEqual(undefined)
    expect(testGalacticAge.findLifeExpectancy('Neptune')).not.toEqual(undefined)
  })

  it('should test whether isStillAlive returns whether lifeExpectancy is greater than user age in years', function(){
    expect(testGalacticAge.isStillAlive()).toEqual(true)
  })

});
