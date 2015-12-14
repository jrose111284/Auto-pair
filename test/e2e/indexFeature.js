describe('Auto-Pair index page has title', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Auto-Pair');
  });
});
