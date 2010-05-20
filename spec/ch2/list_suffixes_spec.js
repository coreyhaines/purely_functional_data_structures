var sys = require('sys'),
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    expect_equal = require('../spec_helper').expect_equal,
    emptyList = lib_require('ch2/list').empty;

sys.puts("Suffix");

(function() {
    sys.puts("empty list");
    var list = emptyList;
    expect(list.suffixes().head().isEmpty(), "empty list has list of the empty list");
}());

(function() {
    sys.puts("single element");
    var list = emptyList.cons('a');

    (function() {
      expect_equal(list, list.suffixes().head(), "head of list is the single-element list");
    }());
}());
