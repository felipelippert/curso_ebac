"use strict";

var _this = void 0;
// ARROW FUNCTIONS

var myFunction = function myFunction() {
  return 'Hello';
};
var returnsCar = function returnsCar() {
  return {
    model: 'March',
    manufacturer: 'Nissan'
  };
};
console.log(myFunction());
console.log(returnsCar());
var car = {
  currentSpeed: 40,
  speedUp: function speedUp() {
    console.log(this);
    this.currentSpeed += 10;
  },
  brake: function brake() {
    console.log(_this);
    _this.currentSpeed -= 10;
  }
};
car.speedUp();
car.brake();
console.log(car.currentSpeed);