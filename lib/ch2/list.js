function list(isEmpty) {
  return { 
    isEmpty: function() { return isEmpty; },
    tail: function() { return list(true); }
  }
}

var empty = list(true);

empty.cons = function(x) {
  var l = list(false);
  l.head = function() { return x; }
  return l;
}

exports.empty = empty;
