'use strict';

describe('Directive: mahjongTitle', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div mahjong-title></div>');
    element = $compile(element)(scope);
    expect(element.find('h1').text()).toBe('Mahjong Learn');
  }));
});
