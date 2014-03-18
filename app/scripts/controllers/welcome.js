'use strict';

angular.module('mahjongLearnAppApp').controller('WelcomeCtrl',
    function($scope, $timeout, L10n) {

	    $scope.language = L10n.getBrowserLanguage();
	    $scope.localize = L10n.setLanguage;

	    $scope.localizedTexts = L10n.getTextsForView(function(response) {
		    $scope.texts = response.texts.Welcome;
		    $scope.menu = response.texts.menu;
	    });

	    $scope.visible = false;

	    $timeout(function() {
		    $scope.visible = true;
		    $scope.continueVisible = true;
	    }, 1500);

    });
