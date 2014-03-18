'use strict';

angular.module('mahjongLearnAppApp').controller('HomeCtrl',
    function($scope, $timeout, $interval, L10n) {
	 
	    $scope.language = L10n.getBrowserLanguage();
	    $scope.localize = L10n.setLanguage;
	    
	    $scope.localizedTexts = L10n.getTextsForView(function(response) {
	    	$scope.texts = response.texts.Home;
	    	$scope.menu = response.texts.menu;
	    });
	   
	    $scope.continueVisible = false;

	    function init() {
		    $interval(function() {
			    $timeout(function() {
				    $scope.visible = !$scope.visible;
				    showLegends();
			    }, 4000);
		    }, 10000);
	    }

	    function showLegends() {
		    $scope.visibleBefLegend = !$scope.visibleBefLegend;
		    $scope.visibleLegend = !$scope.visibleLegend;
		    $scope.continueVisible = true;
	    }

	    init();
    });
