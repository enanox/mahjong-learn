'use strict';

describe('Controller: TilesCtrl', function () {

  // load the controller's module
  beforeEach(module('mahjongLearnAppApp'));

  var TilesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TilesCtrl = $controller('TilesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
