function list(head, tail) {
  return { 
    isEmpty: function() {
      return (typeof this.head() === 'undefined') && (typeof this.tail() === 'undefined');
    },
    head: function() { return head; },
    tail: function() { return tail; },
    cons: function(x) {
      return list(x, this);
    },
    add: function(otherList) {
      if(this.isEmpty()){
        return otherList;
      }

      if(otherList.isEmpty()) {
        return this;
      }

      return list(this.head(), this.tail().add(otherList));
    },
    update: function(index, value) {
      if(index === 1) {
        return list(value);
      }

      return list(this.head(), this.tail().update(index-1, value));
    }
  };
}

exports.empty = list();
