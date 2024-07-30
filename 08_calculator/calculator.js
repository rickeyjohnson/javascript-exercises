const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	return array.reduce((total, curr) => {
    return total + curr
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => {
    return total * current
  }, 1)
};

const power = function(num1, expo) {
	return num1 ** expo
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 0; i--) {
    result *= i
  }
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
