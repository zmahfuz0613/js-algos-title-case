let algos = require("../titleCase.js");

// TITLE CASE

test("Capitalize the first letter of each word.", () => {
  expect(algos.titleCase("shining like a supernova")).toBe("Shining Like A Supernova");
  expect(algos.titleCase("brand new coat hanging on my shoulders")).toBe("Brand New Coat Hanging On My Shoulders");

});

test("Account for grammatical symbols.", () => {
  expect(algos.titleCase("they don't make 'em like me no more")).toBe("They Don't Make 'Em Like Me No More");
})