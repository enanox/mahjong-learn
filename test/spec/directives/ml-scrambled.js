'use strict';

describe('Directive: mlScrambled', function () {

    // load the directive's module
    beforeEach(module('mahjongLearnApp'));

    var element, scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<ml-scrambled></ml-scrambled>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('this is the mlScrambled directive');
    }));
});
