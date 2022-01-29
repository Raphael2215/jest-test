const calculate = require("../code/calculator");

test("100+99 = 199", () => expect(calculate.add(100, 99)).toBe(199));

test("1-2 = -1", () => expect(calculate.subtract(1, 2)).toBe(-1));

test("25*25 = 625", () => expect(calculate.multiply(25, 25)).toBe(625));

test("4/2 = 2", () => expect(calculate.divide(3, 2)).toBe(1.5));

test("number divided by 0 equals null", () =>
  expect(calculate.divide(10, 0)).toBeNull());
