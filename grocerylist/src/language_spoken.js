
 const countryExtractor = (countriesObject) => {
  const countriesArray = []
  for (const country in countriesObject) {
      countriesArray.push(countriesObject[country].name)
  }
  return countriesArray
}



export{

  countryExtractor

};