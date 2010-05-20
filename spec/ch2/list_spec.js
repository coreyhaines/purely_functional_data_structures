var sys = require('sys'),
    spies = require('../spec_helper').spies,
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect,
    list = lib_require('ch2/list');


(function() {
  expect(true === list.empty.isEmpty(), "empty list should be empty");
}());





