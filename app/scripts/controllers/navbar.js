'use strict';

angular.module('mahjongLearnAppApp')
  .controller('NavbarCtrl', function ($scope) {
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
