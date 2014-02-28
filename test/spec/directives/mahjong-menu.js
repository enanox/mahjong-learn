'use strict';

describe('Directive: mahjongMenu', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div mahjong-menu></div>');
    element = $compile(element)(scope);
    
    expect(element.find('nav').attr('class')).toBe('menu');
  }));
});
