'use strict';

angular.module('mahjongLearnAppApp').controller('TilesCtrl',
    function($scope, $timeout, Tiles) {
	    $scope.continueVisible = false;

	    $scope.language = $scope.getLanguage(localStorage);

	    $scope.localize = function(lang) {
		    $scope.setLanguage(lang);
	    };

	    $scope.$on('languageChange', function(a) {
		    $scope.language = $scope.getLanguage(localStorage);
	    });

	    // Got the texts from NavbarCtrl
	    $scope.texts = $scope.getTexts() ? $scope.getTexts().Tiles : null;

	    $scope.tiles = Tiles.getTiles();

	    $timeout(function() {
		    $scope.continueVisible = true;
	    }, 3500);
    });
