const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(item => sum += item);
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
  arr.forEach(item => mul *= item);
  return mul;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let fact = 0;
  if (a == 0 || a == 1) return 1;
  for (let i = a - 1; i > 0; i--) {
    fact = a * i;
    a = fact;
  }
  return fact;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
