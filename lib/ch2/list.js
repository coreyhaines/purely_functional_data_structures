var empty = { isEmpty: function() { return true; } };

empty.cons = function(x) {
  return { 
    isEmpty: function() { return false; },
    head: function() { return x; }
  };
}

exports.empty = empty;
