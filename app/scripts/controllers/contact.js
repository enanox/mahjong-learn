'use strict';

angular.module('mahjongLearnApp').controller('ContactCtrl', function ($scope) {
  	$scope.language = $scope.getLanguage();
       
    $scope.$on('languageChange', function(event, args) {
    	$scope.language = args.newLanguage;
    });
    
    $scope.texts = $scope.getTexts() ? $scope.getTexts().Contact : null;
});
