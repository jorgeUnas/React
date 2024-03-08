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

/*
Let’s break down this example:

In the first line of code, the done parameter is added to the callback passed to it(). Jest now knows to wait until that function is called before concluding the test.
The done() function is called after the expect() assertion is made. This way, the expect() results will not be reported until the async operation is complete and Jest moves on to the next test!
You should notice that the expect() and done() calls are being made in a try block. Without this, if the assertion were to fail, expect() would throw an error before the done() function gets a chance to be called. From Jest’s perspective, the reason for the test failure would be a timeout error (since done() was never called) rather than the actual error thrown by the failed expect() assertion.

By using a catch block, we can capture the error value thrown and pass it to done(), which then displays it in the test output. Though not required, this is a best practice and will yield better test outputs.

*/

// Testing functions that return promises (Use of async/await)
it("Gets the full recipe for pesto", async () => {
  //arrange
  const dish = "Pesto"
  const expectedRecipe = {
    'Basil': '2 cups',
    'Pine Nuts': '2 tablespoons',
    'Garlic': '2 cloves',
    'Olive Oil': '0.5 cups',
    'Grated Parmesan': '0.5 cups'
  }
 
  //act  
  const actualRecipe = await findRecipe(dish); 
  
  //assert
  expect(actualRecipe).toEqual(expectedRecipe);
});