'use strict';

angular.module('mahjongLearnAppApp').controller('WelcomeCtrl',
    function($scope, $timeout, L10n) {
	    
	    $scope.language = L10n.getBrowserLanguage();
	    $scope.visible = false;

	    function getTextsForWelcome() {
		    L10n.loadTextsForView().success(function(staticTexts) {
			    $scope.texts = staticTexts.texts.Welcome;
			    $scope.menu = staticTexts.texts.menu;
		    }).error(function(error) {
			    $scope.error = 'Error loading texts ' + error.message;
		    });
	    }

	    getTextsForWelcome();

	    $timeout(function() {
		    $scope.visible = true;
		    $scope.continueVisible = true;
	    }, 1500);

    });
