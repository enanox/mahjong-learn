'use strict';

angular.module('mahjongLearnAppApp')
  .controller('TableCtrl', function ($scope, L10n, $timeout) {
    
  	$scope.language = L10n.getBrowserLanguage();
    $scope.localize = L10n.setLanguage;
    
    $scope.localizedTexts = L10n.getTextsForView(function(response) {
    	$scope.texts = response.texts.Table;
    	$scope.menu = response.texts.menu;
    });
    
    $timeout(function() {
	    $scope.continueVisible = true;
    }, 1500);
  });
