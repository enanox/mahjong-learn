'use strict';

describe('Directive: mahjongTile', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mahjong-tile></mahjong-tile>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the mahjongTile directive');
  }));
});
