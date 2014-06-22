'use strict';

describe('Controller: YakuCtrl', function () {

  // load the controller's module
  beforeEach(module('mahjongLearnApp'));

  var YakuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YakuCtrl = $controller('YakuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
