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
  	var localized = {'en': 'Text', 'es': 'Texto', 'decoration': '' };
    element = angular.element('<div mahjong-complement-image></div>');
    element.attr('data-localized',JSON.stringify(localized));
    element = $compile(element)(scope);
    
    expect(element.children().length).toBe(2);
    expect(element.children().find('span:first').text()).toBe('');
  }));
});
