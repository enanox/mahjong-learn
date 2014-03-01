'use strict';

angular.module('mahjongLearnAppApp')
  .controller('TableCtrl', function ($scope, L10n) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.language = L10n.getBrowserLanguage();
    $scope.continueVisible = false;
    
    function getTextsForTable()  {
    	L10n.loadTextsForView()
    		.success(function(staticTexts) {
		  		$scope.texts = staticTexts.texts['Table'];
		  		$scope.menu = staticTexts.texts.menu;
		  	})
		  	.error(function(error) {
		  		$scope.error = 'Error loading texts ' + error.message;
		  	});
    }
    
    getTextsForTable();
  });
