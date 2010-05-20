var sys = require('sys'),
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    expect_equal = require('../spec_helper').expect_equal,
    emptyList = lib_require('ch2/list').empty;


(function() {
  sys.puts("Adding single-element lists");
  var list1 = emptyList.cons(1);
  var list2 = emptyList.cons(2);
  var sum = list1.add(list2);

  (function() {
    expect_equal(list1.head(), sum.head(), "head of sum equals head of first list");
  }());

  (function() {
    expect_equal(list2, sum.tail(), "tail of sum equals second list");
  }());
}());

