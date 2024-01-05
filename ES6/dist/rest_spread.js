"use strict";

// ARGUMENTS
function addition() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
}

// REST
function sumWithRest() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (result, index) {
    result += index;
    return result;
  }, 0);
  return sum;
}
console.log(sumWithRest(10, 20, 30));