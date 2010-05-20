function list(isEmpty) {
  return { 
    isEmpty: function() { return isEmpty; }
  }
}

var empty = list(true);

empty.cons = function(x) {
  var l = list(false);
  l.head = function() { return x; }
  l.tail = function() { return list(true); }
  return l;
}

empty.tail = function() { 
  return list(true);
}

exports.empty = empty;
