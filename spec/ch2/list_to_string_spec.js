var sys = require('sys'),
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    expect_equal = require('../spec_helper').expect_equal,
    list = lib_require('ch2/list');

sys.puts("toString");
(function() {
  sys.puts("Empty list");
  expect_equal("[]", list.empty.toString(), "renders as []");
}());


(function() {
  sys.puts("Single element");
  expect_equal("['a']", list.empty.cons('a').toString(), "renders as ['a']");
}());


