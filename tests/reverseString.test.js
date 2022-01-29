const reverseString = require("../code/reverseString");

test("hello should become olleh", () => {
  expect(reverseString("hello")).toMatch("olleh");
});
