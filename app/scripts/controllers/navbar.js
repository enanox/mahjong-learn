'use strict';

angular.module('mahjongLearnApp')
  .controller('NavbarCtrl', function ($scope, L10n) {
  	$scope.language = $scope.getLanguage();
    $scope.setLanguage($scope.language);
    $scope.getTexts();
    
    $scope.localize = function(lang) {
    	$scope.setLanguage(lang);
    };
    
    $scope.$on('languageChange', function(a) {
    	$scope.language = $scope.getLanguage();
    });
    
    $scope.$on('textsLoaded', function() {
    	$scope.menu = $scope.getTexts().menu;
    });
    
  });
