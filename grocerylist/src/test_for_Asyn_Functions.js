// Notice that we need to pass `done` as an argument to the `it()` function to signal that the test will perform an async operation.
it("Gets the full recipe for pesto", (done) => {
  //arrange
  const dish = "pesto";
  const expectedRecipe = {
    'Basil': '2 cups',
    'Pine Nuts': '2 tablespoons',
    'Garlic': '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups'
  };

  //act  
  findRecipe(dish, (actualRecipe) => {   // This is the asynchronous function
    //assert
    try {
      expect(actualRecipe).toEqual(expectedRecipe);
      done();
    } catch (error) {
      done(error);
    }   
  });
});