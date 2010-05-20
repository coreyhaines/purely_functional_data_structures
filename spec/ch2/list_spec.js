var sys = require('sys'),
    spies = require('../spec_helper').spies,
    p = require('../spec_helper').p,
    lib_require = require('../spec_helper').lib_require,
    it = require('../spec_helper').it,
    expect = require('../spec_helper').expect;


(function() {
  var list = lib_require('ch2/list').list;
  expect(false === list.isEmpty());
}());







