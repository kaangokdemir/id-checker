const checkId = require('@/utilities/turkishIdChecker.js');

test("10 different valid Turkish ID numbers", () => {
  expect(checkId('15973515680').status).toBe(true);
  expect(checkId('48434802890').status).toBe(true);
  expect(checkId('89866475924').status).toBe(true);
  expect(checkId('64676450200').status).toBe(true);
  expect(checkId('15844521246').status).toBe(true);
  expect(checkId('30222258880').status).toBe(true);
  expect(checkId('34945632804').status).toBe(true);
  expect(checkId('12730220580').status).toBe(true);
  expect(checkId('63446795756').status).toBe(true);
  expect(checkId('78254264738').status).toBe(true);
});

test("An invalid Turkish ID number which can't pass cases", () => {
  expect(checkId('15173512681').status).toBe(false);
});

test("A string shouldn't pass the tests", () => {
  expect(checkId('Lorem Ipsum').status).toBe(false);
});

test("A number less than 11 characters shouldn't pass the tests", () => {
  expect(checkId(Math.floor(Math.random() * 1000).toString()).status).toBe(false);
});

test("A number greater than 11 characters shouldn't pass the tests", () => {
  expect(checkId(Math.floor(Math.random() * 10000000000000000).toString()).status).toBe(false);
});

test("Ataturk's ID should display a special message", () => {
  expect(checkId('10000000146').display).toBe("This is M.K. Atatürk's ID Number!");
});

test("A number starting with 0 shouldn't pass the test", () => {
  let value = '0' + Math.floor(Math.random() * 10000000000).toString()
  expect(checkId(value).status).toBe(false);
  expect(checkId(value).display).toBe("First letter can't be 0");
});
