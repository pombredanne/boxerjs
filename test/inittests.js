QUnit.test("hello test", function(assert) {
  assert.ok(1 == "1", "Passed!");
});

QUnit.test("init test", function(assert) {
  assert.ok(typeof window.boxerjs == 'object', "Loaded boxerjs!");
  assert.equal(boxerjs.version(), '0.1.0', "Version verified");
  assert.equal(boxerjs.version('x'), '0.1.0', "Default Version verified");
  assert.equal(boxerjs.version('major'), 0, "Major Version verified");
  assert.equal(boxerjs.version('minor'), 1, "Minor Version verified");
  assert.equal(boxerjs.version('patch'), 0, "Patch Version verified");
});

QUnit.test("init method test", function(assert) {
  assert.ok(typeof boxerjs.setlib() == 'object', "Got BoxerJs function");
  var bjs = boxerjs.setlib('jQuery');
  assert.equal(bjs.box(), "Hola", "Called BoxerJs.box function");
});
