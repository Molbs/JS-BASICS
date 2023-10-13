"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getMessage = function getMessage() {
  return "Hello World :)";
};
document.getElementById('output').innerHTML = getMessage();
var myArray = [1, 2, 3, 4];
var myDiv = document.getElementById('main');
for (var _i = 0, _myArray = myArray; _i < _myArray.length; _i++) {
  var prop = _myArray[_i];
  myDiv.innerHTML += "<p> index ".concat(prop, "</p>");
}
var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);
    this.name = name;
    this.age = age;
  }
  _createClass(Person, [{
    key: "sayGreet",
    value: function sayGreet() {
      console.log("Hello there, my name is ".concat(this.name, " and am ").concat(this.age, ".It is really nice to meet you :)"));
    }
  }]);
  return Person;
}();
var persons = new Person("Nielsen", 24);
persons.sayGreet();
console.log("hey There, am great...");
var persons1 = new Person("Maria", 19);
persons1.sayGreet();