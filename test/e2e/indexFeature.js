describe('Auto-Pair index page has title', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Auto-Pair');
  });
});


describe('Index page has a navbar', function() {
	it('has an Add Test link', function() {
		browser.get('http://localhost:3000');

		expect(element(by.buttonText("Add Test")));
		expect(element(by.css('[ng-click="setTabMenu(3)"]')));
	});
});