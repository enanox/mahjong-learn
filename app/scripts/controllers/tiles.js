'use strict';

angular.module('mahjongLearnAppApp')
  .controller('TilesCtrl', function ($scope, L10n, Tiles) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.language = L10n.getBrowserLanguage();
    $scope.continueVisible = false;
    $scope.tiles = Tiles.getTiles();
    
    function getTextsForTiles()  {
      L10n.loadTextsForView()
        .success(function(staticTexts) {
		    $scope.texts = staticTexts.texts.Tiles;
		    $scope.menu = staticTexts.texts.menu;
		  })
		.error(function(error) {
			  $scope.error = 'Error loading texts ' + error.message;
		  });
    }
    
    getTextsForTiles();
    
  
  });
