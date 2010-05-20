var spies = require('./vendor/spies').Spies,
    sys = require('sys');

exports.spies = spies;

function p(it){
  sys.puts(sys.inspect(it));
}

exports.p = p

function lib_require(module){
  return require('../lib/' + module);
}

exports.lib_require = lib_require;
