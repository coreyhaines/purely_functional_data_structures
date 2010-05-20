function suffixes(){
  return list();
}

function update(index, value){
  if(index < 1) {
    return this;
  }

  if(index === 1) {
    return list(value, this.tail());
  }

  return list(this.head(), this.tail().update(index-1, value));
}

function add(otherList){
  if(this.isEmpty()){
    return otherList;
  }

  if(otherList.isEmpty()) {
    return this;
  }

  return list(this.head(), this.tail().add(otherList));
}

function list(head, tail) {
  return { 
    isEmpty: function() {
      return (typeof this.head() === 'undefined') && (typeof this.tail() === 'undefined');
    },
    head: function() { return head; },
    tail: function() { return tail; },
    cons: function(x) { return list(x, this); },
    add: add,
    update: update,
    suffixes: suffixes
  };
}

exports.empty = list();
