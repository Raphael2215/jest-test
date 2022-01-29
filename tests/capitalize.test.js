const capitalize = require("../code/capitalize");
test("hello should become Hello", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("Hello should remain Hello", () => {
  expect(capitalize("Hello")).toMatch("Hello");
});

test("hello world should become Hello world", () => {
  expect(capitalize("hello world")).toMatch("Hello world");
});
