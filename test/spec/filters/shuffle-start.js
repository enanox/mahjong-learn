'use strict';

describe('Filter: shuffleStart', function () {

  // load the filter's module
  beforeEach(module('mahjongLearnApp'));

  // initialize a new instance of the filter before each test
  var shuffleStart;
  beforeEach(inject(function ($filter) {
    shuffleStart = $filter('shuffleStart');
  }));

  it('should return a random number"', function () {
    var text = 'angularjs';
    expect(shuffleStart(text)).toBeTruthy();
  });

});
