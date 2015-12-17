describe('Auto-Pair index page has title', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Auto-Pair');
  });
});

describe('Multiple Choice Questions', function() {
  it('can reach Add Question page', function() {
    browser.get('http://localhost:3000/#/questions/new');
    var add_button = element(by.id('add-question'));
    expect(add_button).isPresent().toBe(false);
  });
});
