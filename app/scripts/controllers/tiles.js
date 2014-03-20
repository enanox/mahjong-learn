'use strict';

angular.module('mahjongLearnAppApp').controller('TilesCtrl',
    function($scope, $timeout, L10n, Tiles) {
	    $scope.continueVisible = false;

	    $scope.language = $scope.getLanguage(localStorage);

	    $scope.localize = function(lang) {
		    $scope.setLanguage(lang, localStorage);
	    };

	    $scope.$on('languageChange', function(a) {
		    $scope.language = $scope.getLanguage(localStorage);
	    });

	    $scope.localizedTexts = L10n.getTextsForView(function(response) {
		    $scope.texts = response.texts.Tiles;
		    $scope.menu = response.texts.menu;
	    });

	    $scope.tiles = Tiles.getTiles();

	    $timeout(function() {
		    $scope.continueVisible = true;
	    }, 3500);
    });
