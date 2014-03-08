'use strict';

angular.module('mahjongLearnAppApp').controller('StartCtrl',
    function($scope, $timeout, L10n, Tiles) {
	    $scope.awesomeThings = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma' ];

	    $scope.language = L10n.getBrowserLanguage();
	    $scope.continueVisible = false;
	    $scope.areFlipped = true;
	    $scope.myDebugMode = true;
	    $scope.scrambledIndex = 0;
	    $scope.scrambledTiles = [];

	    Tiles.getResource().get(function(data) {
		    $scope.tiles = data;
		    $scope.scrambledTiles = Tiles.joinTiles(data);
		    $scope.shuffle();
	    });

	    function getTextsForStart() {
		    L10n.loadTextsForView().success(function(staticTexts) {
			    $scope.texts = staticTexts.texts.Start;
			    $scope.menu = staticTexts.texts.menu;
		    }).error(function(error) {
			    $scope.error = 'Error loading texts ' + error.message;
		    });
	    }

	    getTextsForStart();

	    $timeout(function() {
		    $scope.continueVisible = true;
	    }, 3500);

	    $scope.toggleFlip = function() {
		    $scope.areFlipped = !$scope.areFlipped;
	    };

	    $scope.$watch('scrambledTiles');

	    $scope.shuffle = function() {
		    var tileList = $scope.scrambledTiles;
		    $scope.scrambledTiles = [];
		    var temp = Tiles.shuffle(tileList);

		    for ( var i = 0; i < temp.length; i++) {
			    $scope.scrambledTiles.push(temp[i]);
		    }

	    };

    });
