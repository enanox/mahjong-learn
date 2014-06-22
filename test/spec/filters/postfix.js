'use strict';

describe('Filter: postfix', function () {

  // load the filter's module
  beforeEach(module('mahjongLearnApp'));

  // initialize a new instance of the filter before each test
  var postfix;
  beforeEach(inject(function ($filter) {
    postfix = $filter('postfix');
  }));

  it('should return the input prefixed with "postfix filter:"', function () {
    var text = '1';
    expect(postfix(text)).toBe(text+'st');
  });

});
