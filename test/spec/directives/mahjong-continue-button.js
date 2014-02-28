'use strict';

describe('Directive: mahjongContinueButton', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div mahjong-continue-button></div>');
    element = $compile(element)(scope);
    expect(element.children().children().children().text()).toBe('{{ texts.continue[language] }}');
  }));
});
