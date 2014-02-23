'use strict';

angular.module('mahjongLearnAppApp')
  .controller('HomeCtrl', function ($scope, L10n) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.showWelcomeMessage = function()  {
    	console.log(L10n.getBrowserLanguage())
    };
    
    
    
  });
