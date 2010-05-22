Before(function(){
  listUnderTest = null;
});

Given(/^an empty list$/, function(){
  listUnderTest = exports.empty;
});

When(/^I cons "([^"]*)"$/, function(item) {
  listUnderTest = listUnderTest.cons(item);
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

Then (/^the head should be "([^\"]*)"$/, function(head){
  assertEqual(head, listUnderTest.head());
});
