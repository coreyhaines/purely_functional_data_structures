
var sys = require('sys'),
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    expect_equal = require('../spec_helper').expect_equal,
    emptyList = lib_require('ch2/list').empty;


(function() {
    sys.puts("single element list");
    var list = emptyList.cons('a');
    var updated = list.update(1, 'b');
    expect_equal('b', updated.head(), "head gets updated");
}());

(function() {
    sys.puts("multiple element list");
    var list = emptyList.cons('c').cons('b').cons('a');
    (function() {
      var updated = list.update(1, 'b');
      expect_equal('b', updated.head(), "can update head");
    }());

    (function() {
      var updated = list.update(2, 'hello');
      expect_equal('hello', updated.tail().head(), "can update second element");
    }());

    (function() {
      var updated = list.update(2, 'hello');
      expect_equal('a', updated.head(), 'retains first part of list');
      expect_equal('c', updated.tail().tail().head(), "retains last part of list");
    }());
}());
