function list(head, tail) {
  return { 
    isEmpty: function() {
      return (typeof this.head() === 'undefined') && (typeof this.tail() === 'undefined');
    },
    head: function() { return head; },
    tail: function() { return tail; },
    cons: function(x) {
      return list(x, this);
    }
  }
}

exports.empty = list();
