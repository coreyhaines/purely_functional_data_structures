Given(/^an empty list$/, function(){
  list = exports.empty;
});

When(/^I cons "([^"]*)"$/, function() {
});

Then(/^it should be empty$/, function() {
  assertEqual(true, list.isEmpty());
});

Then(/^it should be "([^"]*)"$/, function() {
});

