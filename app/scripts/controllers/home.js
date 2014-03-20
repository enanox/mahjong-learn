'use strict';

angular.module('mahjongLearnAppApp').controller('HomeCtrl',
    function($scope, $timeout, $interval, L10n) {
	 
	    $scope.language = $scope.getLanguage(localStorage);
	    
	    $scope.localize = function(lang) {
	    	$scope.setLanguage(lang, localStorage);
	    };
	    
	    $scope.$on('languageChange', function(a) {
	    	$scope.language = $scope.getLanguage(localStorage);
	    });
	    
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
