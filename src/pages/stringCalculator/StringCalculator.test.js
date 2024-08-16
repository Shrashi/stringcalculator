const add = require("./calculate");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself when only one number is provided", () => {
  expect(add("1")).toBe(1);
});

test("should return the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("should return the sum of an unknown amount of numbers", () => {
  expect(add("1,2,3")).toBe(6);
});
