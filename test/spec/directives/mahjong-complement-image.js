'use strict';

describe('Directive: mahjongComplementImage', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div mahjong-complement-image></div>');
    element = $compile(element)(scope);
    
    expect(element.children().length).toBe(2);
    expect(element.children().find('span:first').text()).toBe('');
  }));
});
