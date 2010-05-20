var    sys = require('sys'),
       spies = require('../spec_helper');

function p(it){
  sys.puts(sys.inspect(it));
}

p(spies);
