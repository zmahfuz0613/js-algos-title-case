let algos = require("../titleCase.js");

///????
test("capitalize the first letter of each word", () => {
  expect(algos.titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
});
