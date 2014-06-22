'use strict';

angular.module('mahjongLearnApp')
  .controller('ContactCtrl', function ($scope, L10n) {
  	$scope.language = $scope.getLanguage();
    $scope.setLanguage($scope.language);
    
    $scope.localize = function(lang) {
    	$scope.setLanguage(lang);
    };
	   
    $scope.$on('languageChange', function(a) {
    	$scope.language = $scope.getLanguage();
    });
    
    // Got the texts from NavbarCtrl
    $scope.texts = $scope.getTexts() ? $scope.getTexts().Contact : null;
  });
