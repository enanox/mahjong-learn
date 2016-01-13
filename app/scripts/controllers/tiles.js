'use strict';

angular.module('mahjongLearnApp').controller('TilesCtrl', function($scope, $timeout, Tiles) {
    $scope.continueVisible = false;

    $scope.language = $scope.getLanguage();

    $scope.$on('languageChange', function(event, args) {
        $scope.language = args.newLanguage;
    });

    // Got the texts from NavbarCtrl
    $scope.texts = $scope.getTexts() ? $scope.getTexts().Tiles : null;
    $scope.tiles = Tiles.getTiles();

    $timeout(function() {
        $scope.continueVisible = true;
    }, 3500);
});
