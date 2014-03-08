'use strict';

angular.module('mahjongLearnAppApp').controller('HomeCtrl',
    function($scope, $timeout, $interval, L10n) {
	    $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

	    $scope.language = L10n.getBrowserLanguage();
	    $scope.continueVisible = false;

	    function getTextsForHome() {
		    L10n.loadTextsForView().success(function(staticTexts) {
			    $scope.texts = staticTexts.texts.Home;
			    $scope.menu = staticTexts.texts.menu;
		    }).error(function(error) {
			    $scope.error = 'Error loading texts ' + error.message;
		    });
	    }

	    getTextsForHome();

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
