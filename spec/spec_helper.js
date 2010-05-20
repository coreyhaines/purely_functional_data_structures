var spies = require('./vendor/spies').Spies,
    sys = require('sys');

exports.spies = spies;

function p(it){
  sys.puts(sys.inspect(it));
}
exports.p = p;

exports.lib_require = function lib_require(module){
  return require('../lib/' + module);
};

function expect(condition, message){
  if(message){
    sys.puts(message);
  }
  if(!condition){
    sys.puts('F');
  }else{
    sys.puts('.');
  }
  return condition;
}
exports.expect = expect;

function expect_equal(expected, actual, message) {
  if(!expect(expected === actual, message)){
    sys.puts("Expected: " + sys.inspect(expected, true) + "\nBut got:  " + sys.inspect(actual, true));
  }
}
exports.expect_equal = expect_equal;
