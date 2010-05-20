var Spies;
if(Spies) {
  throw "The Spies namespace has already been defined by a previously loaded library";
}
Spies = {};


Spies.stub = function(){
  var spy;

  spy = Spies.spyOn.apply(null, arguments);
  spy.removeStub = spy.stopSpying;

  return spy;
};

Spies.spyOn = function() {
  var obj, functionName, returnValue, 
      wasCalled, capturedArgs, originalFunction, 
      spy;

  if(typeof arguments[0] === 'string') {
    obj = {};
    functionName = arguments[0];
    returnValue = arguments[1];
  }else{
    obj = arguments[0];
    functionName = arguments[1];
    returnValue = arguments[2];
  }

  function initialize() {
    wasCalled = false;
    capturedArgs = [];
  }

  function passedArguments(index) {
    if(arguments.length === 0) {
      return capturedArgs;
    } else {
      return capturedArgs[index - 1];
    }
  }

  function spyFunction() { 
    capturedArgs = arguments;
    wasCalled = true;
    return returnValue;
  }

  originalFunction = obj[functionName];

  function resetOriginalFunction() {
    obj[functionName] = originalFunction; 
  }

  obj[functionName] = spyFunction;

  spy = {
    wasCalled: function() {return wasCalled;},
    passedArguments: passedArguments,
    stopSpying: resetOriginalFunction,
    resetSpy: initialize,
    object: obj,
    spyFunction: spyFunction
  };

  spy.resetSpy();
  return spy;
};

if(!exports){
  var exports = {};
}
exports.Spies = Spies;
