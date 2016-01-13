'use strict';

angular.module('mahjongLearnApp').controller('TableCtrl', function ($scope, $timeout) {    
  	$scope.language = $scope.getLanguage();
    
    $scope.$on('languageChange', function(event, args) {
    	$scope.language = args.newLanguage;
    });    
    
    $scope.texts = $scope.getTexts() ? $scope.getTexts().Table : null;
    
    $timeout(function() {
	    $scope.continueVisible = true;
    }, 1500);
});
