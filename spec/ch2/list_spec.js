var sys = require('sys'),
    spies = require('../spec_helper').spies,
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    list = lib_require('ch2/list');


(function() {
  expect(true === list.empty.isEmpty(), "empty list is empty");
}());


(function() {
  var empty = list.empty;
  var nonEmpty = empty.cons(1);
  expect(false === nonEmpty.isEmpty(), "cons makes list not empty");
}());

(function() {
  var empty = list.empty;
  var nonEmpty = empty.cons(1);
  expect(1 === nonEmpty.head(), "head returns what was just cons-ed");
}());

// (function() {
  // var empty = list.empty;
  // expect(true === empty.tail().isEmpty(), "empty list has empty tail");
// }());

// (function() {
  // var nonEmpty = list.empty.cons(1);
  // expect(true === nonEmpty.tail().isEmpty(), "cons-ed list has empty tail");
// }());

