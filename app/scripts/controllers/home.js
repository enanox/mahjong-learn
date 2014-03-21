'use strict';

angular.module('mahjongLearnAppApp').controller('HomeCtrl',
    function($scope, $timeout, $interval) {
	 
	    $scope.language = $scope.getLanguage();
	    $scope.setLanguage($scope.language);
	    
	    $scope.localize = function(lang) {
	    	$scope.setLanguage(lang);
	    };
		   
	    $scope.$on('languageChange', function(a) {
	    	$scope.language = $scope.getLanguage();
	    });
	    
	    // Got the texts from NavbarCtrl
	    $scope.texts = $scope.getTexts() ? $scope.getTexts().Home : null;
	   
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
