'use strict';

angular.module('mahjongLearnAppApp').controller('TilesCtrl',
    function($scope, $timeout, L10n, Tiles) {
	    $scope.continueVisible = false;
	    
	    $scope.language = L10n.getBrowserLanguage();
	    $scope.localize = L10n.setLanguage;
	    
	    $scope.localizedTexts = L10n.getTextsForView(function(response) {
	    	$scope.texts = response.texts.Tiles;
	    	$scope.menu = response.texts.menu;
	    });
	    
	    $scope.tiles = Tiles.getTiles();

	    $timeout(function() {
		    $scope.continueVisible = true;
	    }, 3500);
    });
