Given(/^an empty list$/, function(){
  this["list"] = exports.empty;
});

Given(/^an empty list "([^"]*)"$/, function(name){
  this[name] = exports.empty;
});

Given(/^"([^"]*)" as a list$/, function(itemsString){
  var items;
  if(itemsString.length === 0){
    items = [];
  }else{
   items = itemsString.split(',');
  }
  this["list"] = exports.listFromArray(items);
});

Given(/^"([^"]*)" as "([^"]*)"$/, function(itemsString, listName){
  var items;
  if(itemsString.length === 0){
    items = [];
  }else{
   items = itemsString.split(',');
  }
  this[listName] = exports.listFromArray(items);
});

When(/^I cons "([^"]*)"$/, function(item) {
  this["list"] = this["list"].cons(item);
});

When(/^I cons "([^"]*)" to "([^"]*)"$/, function(item, listName) {
  this[listName] = this[listName].cons(item);
});

When(/^I add "([^"]*)" and "([^"]*)"$/, function(augend, addend) {
  sum = this[augend].add(this[addend]);
});

Then(/^it should be empty$/, function() {
  assertEqual(true, this["list"].isEmpty());
});

Then(/^it should not be empty$/, function() {
  assertEqual(false, this["list"].isEmpty());
});

Then(/^it should be "([^"]*)"$/, function(listRepresentation) {
  assertEqual(listRepresentation, this["list"].toString());
});

Then(/^the sum should equal "([^"]*)"$/, function(listName) {
  assertEqual(this[listName], sum);
});

Then(/^the head should be "([^\"]*)"$/, function(head){
  assertEqual(head, this["list"].head());
});

Then(/^the head should be undefined$/, function(){
  assertEqual('undefined', typeof this["list"].head());
});

Then(/^the tail should be undefined$/, function(){
  assertEqual('undefined', typeof this["list"].tail());
});

Then(/^the tail should be empty$/, function(){
  assertEqual(true, this["list"].tail().isEmpty());
});

Then(/^the head of the tail should be "([^\"]*)"$/, function(value){
  assertEqual(value, this["list"].tail().head());
});


Then(/^the head of the sum equals the head of "([^\"]*)"$/, function(listName){
  assertEqual(this[listName].head(), this["sum"].head());
});

Then(/^the tail of the sum equals "([^\"]*)"$/, function(listName){
  assertEqual(this[listName], this["sum"].tail());
});

Then(/^the head of the sum is "([^\"]*)"$/, function(arg1){
  pending("head of the sum");
});

Then(/^the head of the tail of the sum is "([^\"]*)"$/, function(arg1){
  pending("the head of the tail of the sum");
});

Then(/^the head of the tail of the tail of the sum is "([^\"]*)"$/, function(arg1){
  pending("the head of the tail of the tail of the sum");
});

Then(/^the sum should be "([^\"]*)"$/, function(sum){
  assertEqual(exports.listFromArray(sum.split(',')).toString(), this['sum'].toString());
});

