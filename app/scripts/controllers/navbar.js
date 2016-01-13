'use strict';

angular.module('mahjongLearnApp')
  .controller('NavbarCtrl', function ($scope, L10n) {  	
    $scope.getTexts();
    
    $scope.$on('textsLoaded', function() {
    	$scope.menu = $scope.getTexts().menu;
    });
  });
