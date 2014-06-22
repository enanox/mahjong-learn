'use strict';

describe('Directive: mlMenu', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div ml-menu></div>');
    element = $compile(element)(scope);
    
    expect(element.attr('class')).toBe('menu navbar navbar-default ng-scope');
  }));
});
