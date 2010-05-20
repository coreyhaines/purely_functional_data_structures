function list(isEmpty) {
  return { 
    isEmpty: function() { return isEmpty; }
  }
}

var empty = list(true);

empty.cons = function(x) {
  var l = list(false);
  l.head = function() { return x; }
  return l;
}

empty.tail = function() { 
  return list(true);
}

exports.empty = empty;
