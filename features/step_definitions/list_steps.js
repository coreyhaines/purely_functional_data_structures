Before(function(){
  listUnderTest = null;
});

Given(/^an empty list$/, function(){
  listUnderTest = exports.empty;
});

Given(/^an empty list "([^"]*)"$/, function(name){
  this[name] = exports.empty;
});

When(/^I cons "([^"]*)"$/, function(item) {
  listUnderTest = listUnderTest.cons(item);
});

When(/^I cons "([^"]*)" to "([^"]*)"$/, function(item, listName) {
  this[listName] = this[listName].cons(item);
});

When(/^I add "([^"]*)" and "([^"]*)"$/, function(augend, addend) {
  sum = this[augend].add(this[addend]);
});

Then(/^it should be empty$/, function() {
  assertEqual(true, listUnderTest.isEmpty());
});

Then(/^it should not be empty$/, function() {
  assertEqual(false, listUnderTest.isEmpty());
});

Then(/^it should be "([^"]*)"$/, function(listRepresentation) {
  assertEqual(listRepresentation, listUnderTest.toString());
});

Then(/^the sum should equal "([^"]*)"$/, function(listName) {
  assertEqual(this[listName], sum);
});

Then(/^the head should be "([^\"]*)"$/, function(head){
  assertEqual(head, listUnderTest.head());
});

Then(/^the head should be undefined$/, function(){
  assertEqual('undefined', typeof listUnderTest.head());
});

Then(/^the tail should be undefined$/, function(){
  assertEqual('undefined', typeof listUnderTest.tail());
});

Then(/^the tail should be empty$/, function(){
  assertEqual(true, listUnderTest.tail().isEmpty());
});


Then(/^the head of the tail should be "([^\"]*)"$/, function(value){
  assertEqual(value, listUnderTest.tail().head());
});


Then (/^the head of the sum equals the head of "([^\"]*)"$/, function(listName){
  assertEqual(this[listName].head(), sum.head());
});

Then (/^the tail of the sum equals "([^\"]*)"$/, function(listName){
  assertEqual(this[listName], sum.tail());
});
