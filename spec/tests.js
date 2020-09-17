var passedTests = 0;
var failedTests = 0;
var totalTests = 0;
var should = {};
var category = {};
var tests = [];

function expect(value) {
  return {
    toBe: function (expectedValue) {
      if (value === expectedValue) {
        should.expects.push({
          expectation: `expect ${value} to equal ${expectedValue}`,
          passed: true,
        });
        passedTests++;
      } else {
        should.expects.push({
          expectation: `expect ${value} to equal ${expectedValue}`,
          passed: false,
        });
        failedTests++;
      }
    },
  };
}

function it(desc, fn) {
  should = { description: desc, expects: [] };
  category.it.push(should);
  totalTests++;
  fn.apply(this);
}

function describe(desc, fn) {
  category = { it: [] };
  category.description = desc;
  tests.push(category);
  fn.apply(this);
}

function runTests() {
  console.log(
    `Total Tests: ${totalTests}, Total Tests Passed: ${passedTests}, Total Tests Failed: ${failedTests}`
  );
  for (var index = 0; index < tests.length; index++) {
    console.log(tests[index].description);
    for (var i = 0; i < tests[index].it.length; i++) {
      console.log(tests[index].it[i].description);
      for (var ii = 0; ii < tests[index].it[i].expects.length; ii++) {
        console.log(tests[index].it[i].expects[ii].expectation);
        console.log('Passed? ' + tests[index].it[i].expects[ii].passed);
      }
    }
  }
}
