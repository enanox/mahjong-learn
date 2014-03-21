'use strict';

angular.module('mahjongLearnAppApp').controller('WelcomeCtrl',
    function($scope, $timeout, L10n) {

	    $scope.language = $scope.getLanguage(localStorage);
	    
	    $scope.localize = function(lang) {
	    	$scope.setLanguage(lang);
	    };
	    
	    $scope.$on('languageChange', function(a) {
	    	$scope.language = $scope.getLanguage(localStorage);
	    });

	    // Got the texts from NavbarCtrl
	    $scope.texts = $scope.getTexts() ? $scope.getTexts().Welcome : null;

	    $scope.visible = false;

	    $timeout(function() {
		    $scope.visible = true;
		    $scope.continueVisible = true;
	    }, 1500);

    });
