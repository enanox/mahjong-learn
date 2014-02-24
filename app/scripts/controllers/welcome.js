'use strict';

angular.module('mahjongLearnAppApp')
  .controller('WelcomeCtrl', function ($scope, L10n) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.language = L10n.getBrowserLanguage();
    $scope.texts = {};
    $scope.menu = {};
    $scope.error;
    
    function getTextsForWelcome()  {
    	L10n.loadTextsForView()
			.success(function(staticTexts) {
		  		$scope.texts = staticTexts.texts['Welcome'];
		  		$scope.menu = staticTexts.texts.menu;
		  	})
		  	.error(function(error) {
		  		$scope.error = 'Error loading texts ' + error.message;
		  	});
    }
    
    getTextsForWelcome();
  });
