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

exports.expect = function(condition, message){
  if(!condition){
    sys.puts('F');
    if(message){
      sys.puts(message);
    }else{
      sys.puts('expected ' + condition + ' to be true');
    }
  }else{
    sys.puts('.');
  }
};
