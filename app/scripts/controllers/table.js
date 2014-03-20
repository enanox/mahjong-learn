'use strict';

angular.module('mahjongLearnAppApp')
  .controller('TableCtrl', function ($scope, L10n, $timeout) {
    
  	$scope.language = $scope.getLanguage(localStorage);
    
    $scope.localize = function(lang) {
    	$scope.setLanguage(lang, localStorage);
    };
    
    $scope.$on('languageChange', function(a) {
    	$scope.language = $scope.getLanguage(localStorage);
    });
    
    $scope.localizedTexts = L10n.getTextsForView(function(response) {
    	$scope.texts = response.texts.Table;
    	$scope.menu = response.texts.menu;
    });
    
    $timeout(function() {
	    $scope.continueVisible = true;
    }, 1500);
  });
