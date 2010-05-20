function list(head, tail) {
  var l = { 
    isEmpty: function() {
      return (typeof this.head() === 'undefined') && (typeof this.tail() === 'undefined');
    },
    head: function() { return head; },
    tail: function() { return tail; },
    cons: function(x) {
      return list(x, this);
    },
    add: function(otherList) {
      return list(this.head(), otherList);
    }
  };

  return l;
}

exports.empty = list();
