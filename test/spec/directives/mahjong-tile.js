'use strict';

describe('Directive: mahjongTile', function () {

  // load the directive's module
  beforeEach(module('mahjongLearnAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should append child spans with tile name and with tile image', inject(function ($compile) {
	var objectTile = {'en': 'one', 'es': 'uno', 'value': 1, 'suit': 'B'};
	
    element = angular.element('<div mahjong-tile></div>');
    element.attr('data-tile',JSON.stringify(objectTile));
    element = $compile(element)(scope);
    
    expect(element.find('span').eq(0).hasClass('')).toBe(true);
    expect(element.find('span').eq(1).hasClass('bam one')).toBe(true);
  }));
});
