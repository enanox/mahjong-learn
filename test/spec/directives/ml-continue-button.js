'use strict';

describe('Directive: mlContinueButton', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div ml-continue-button></div>');
    element = $compile(element)(scope);
    expect(element.children().children().text()).toBe('{{ texts.continue[language] }}');
  }));
});
