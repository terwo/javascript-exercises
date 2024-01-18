const add = function (a, b) {
  return a + b;

};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum;

};

const multiply = function (arr) {
  let prod = 1;
  for (let i in arr) {
    prod *= arr[i];
  }
  return prod;
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
