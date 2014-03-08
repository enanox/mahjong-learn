'use strict';

describe('Filter: shuffleStart', function () {

  // load the filter's module
  beforeEach(module('mahjongLearnAppApp'));

  // initialize a new instance of the filter before each test
  var shuffleStart;
  beforeEach(inject(function ($filter) {
    shuffleStart = $filter('shuffleStart');
  }));

  it('should return the input prefixed with "shuffleStart filter:"', function () {
    var text = 'angularjs';
    expect(shuffleStart(text)).toBe('shuffleStart filter: ' + text);
  });

});
