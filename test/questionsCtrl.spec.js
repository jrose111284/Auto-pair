describe('questionsController', function() {
  beforeEach(module('autopairControllers'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('questionsController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

});
