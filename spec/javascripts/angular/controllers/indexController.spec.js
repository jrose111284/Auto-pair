describe('indexController', function() {
  beforeEach(module('autoPair'));

  var ctrl;

  beforeEach(inject(function($controller) {
  ctrl = $controller('indexController');
  }));

  it('initialises with an active tab menu', function() {
  expect(ctrl.activeTabMenu).toBeUndefined();
  });
});
