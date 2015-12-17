'use strict';

describe('Auto-Pair index page has title', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Auto-Pair');
  });
});

describe('index template', function() {
  it('has the div with class index', function() {
    browser.get('http://localhost:3000/');
    var indexClass = element(by.css('.index'));
    expect(indexClass.isPresent()).toBe(true);
  });
});


describe('questions template', function() {
  it('link to questions works', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('View Questions')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/questions');
  });
  it('has the div with class index', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('View Questions')).click();
    var indexClass = element(by.css('.questions'));
    expect(indexClass.isPresent()).toBe(true);
  });
});

describe('add test template', function() {
  it('link to add test works', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Add Test')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/add-test');
  });
  it('has the div with class test', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Add Test')).click();
    var indexClass = element(by.css('.test'));
    expect(indexClass.isPresent()).toBe(true);
  });
});

describe('multiple choice template', function() {
  it('link to multiple choice works', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Multiple Choice')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/multiple-choice');
  });
  it('has the div with class multiple', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Multiple Choice')).click();
    var indexClass = element(by.css('.multiple'));
    expect(indexClass.isPresent()).toBe(true);
  });
});

describe('programming template', function() {
  it('link to programming works', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Programming')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/programming');
  });
  it('has the div with class programming', function() {
    browser.get('http://localhost:3000/');
    element(by.linkText('Programming')).click();
    var indexClass = element(by.css('.programming'));
    expect(indexClass.isPresent()).toBe(true);
  });
});
