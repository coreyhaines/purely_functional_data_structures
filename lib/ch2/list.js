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
      var newHead, newTail;
      newHead = this.head();
      if(this.tail().isEmpty()){
        newTail = otherList;
      }else{
        newTail = this.tail().add(otherList); 
      }
      return list(newHead, newTail);
    }
  };

  return l;
}

exports.empty = list();
