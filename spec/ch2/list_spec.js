var sys = require('sys'),
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    expect_equal = require('../spec_helper').expect_equal,
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
  expect_equal(1, nonEmpty.head(), "head returns what was just cons-ed");
}());

(function() {
  var empty = list.empty;
  expect_equal('undefined', typeof empty.head(), "empty list has undefined head");
}());

(function() {
  var empty = list.empty;
  expect_equal('undefined', typeof empty.tail(), "empty list has undefined tail");
}());

(function() {
  var nonEmpty = list.empty.cons(1);
  expect(true === nonEmpty.tail().isEmpty(), "cons-ed list has empty tail");
}());

(function() {
  var firstCons = list.empty.cons(1);
  var secondCons = firstCons.cons(2);
  expect_equal(1, secondCons.tail().head(), "head of tail");
}());

