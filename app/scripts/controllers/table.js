'use strict';

angular.module('mahjongLearnAppApp')
  .controller('TableCtrl', function ($scope, $timeout) {
    
  	$scope.language = $scope.getLanguage(localStorage);
    
    $scope.localize = function(lang) {
    	$scope.setLanguage(lang);
    };
    
    $scope.$on('languageChange', function(a) {
    	$scope.language = $scope.getLanguage(localStorage);
    });
    
    // Got the texts from NavbarCtrl
    $scope.texts = $scope.getTexts() ? $scope.getTexts().Table : null;
    
    $timeout(function() {
	    $scope.continueVisible = true;
    }, 1500);
  });
