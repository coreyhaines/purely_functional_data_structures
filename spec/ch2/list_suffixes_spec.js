var sys = require('sys'),
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    expect_equal = require('../spec_helper').expect_equal,
    emptyList = lib_require('ch2/list').empty;


(function() {
    sys.puts("empty list");
    var list = emptyList;
    expect(list.suffixes().isEmpty(), "empty list has empty list for suffixes");
}());

