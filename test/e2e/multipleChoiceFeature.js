describe('Multiple Choice Questions', function() {
  it('can reach Add Question page', function() {
    browser.get('http://localhost:3000/#/multiple-choice');
    var save_button = element(by.css('.save'));
    expect(save_button.isPresent()).toBe(true);
  });
});
