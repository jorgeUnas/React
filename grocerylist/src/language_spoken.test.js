import { 
  countryExtractor

} from './language_spoken.js';

it("converts array of country data objects to array of countries", ()=>{
    //arrange
    const inputObject = [
      {name: "Argentina", capital: "Buenos Aires"},
      {name: "Belize", capital: "Belmopan"},
      {name: "Bolivia", capital: "Sucre"}
      ]
    const expectedValue = ["Argentina","Belize","Bolivi"]
    
    //act
    const actualValue = countryExtractor(inputObject)
    
    //assert
    expect(actualValue).toEqual(expectedValue);
    
})