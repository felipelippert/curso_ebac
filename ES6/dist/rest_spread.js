"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ARGUMENTS
function addition() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
}

// REST OPERATOR
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

// SPREAD OPERATOR
var numbers = [1, 2, 3, 4];
(_console = console).log.apply(_console, numbers);
var BrSoccerTeams = ['santos', 'palmeiras', 'internacional', 'gremio'];
var EuSoccerTeams = ['barcelona', 'milan', 'real madrid', 'liverpool'];
// const soccerTeams = BrSoccerTeams.concat(EuSoccerTeams);
var soccerTeams = [].concat(BrSoccerTeams, EuSoccerTeams);
console.log(soccerTeams);
var JohnsCar = {
  model: 'Prius',
  manufacturer: 'Volkswagen',
  engine: 1.6
};
var AnnasCar = _objectSpread(_objectSpread({}, JohnsCar), {}, {
  engine: 1.8
});
console.log(AnnasCar);

// DESTRUCTURING
// const annasCarEngine = AnnasCar.engine;
var annasCarEngine = AnnasCar.engine;
var johnsCarEngine = JohnsCar.engine;
console.log(annasCarEngine);
console.log(johnsCarEngine);
var _soccerTeams = _toArray(soccerTeams),
  item1 = _soccerTeams[0],
  item2 = _soccerTeams[1],
  item3 = _soccerTeams[2],
  otherTeams = _soccerTeams.slice(3);
console.log(item1);
console.log(item2);
console.log(item3);
console.log(otherTeams);