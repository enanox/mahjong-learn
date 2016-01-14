'use strict';

describe('Controller: EndCtrl', function () {

    // load the controller's module
    beforeEach(module('mahjongLearnApp'));

    var EndCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        EndCtrl = $controller('EndCtrl', {
            $scope: scope
        });
    }));
});
