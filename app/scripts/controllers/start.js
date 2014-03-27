'use strict';

angular
    .module('mahjongLearnAppApp')
    .controller(
        'StartCtrl',
        function($scope, $timeout, Tiles, L10n) {
	        $scope.language = $scope.getLanguage(localStorage);

	        $scope.localize = function(lang) {
		        $scope.setLanguage(lang);
	        };

	        $scope.$on('languageChange', function(a) {
		        $scope.language = $scope.getLanguage(localStorage);
	        });

	        // Got the texts from NavbarCtrl
	        $scope.texts = $scope.getTexts() ? $scope.getTexts().Start : null;

	        $scope.continueVisible = false;
	        $scope.areFlipped = true;
	        $scope.myDebugMode = true;
	        $scope.scrambledIndex = 0;
	        $scope.scrambledTiles = [];
	        $scope.size = 'medium';
	        $scope.showFirstDescription = true;
	        $scope.windsOrder = [ 'east', 'south', 'west', 'north' ];

	        Tiles.getResource().get(function(data) {
		        $scope.tiles = data;
		        $scope.scrambledTiles = Tiles.joinTiles(data);
		        $scope.shuffle();
	        });

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

	        $scope.getTilesWallPosition = function(seatIndex, tileIndex) {
		        var tileDimensions = {
		          small : {
		            width : 19,
		            height : 27
		          },
		          medium : {
		            width : 28,
		            height : 41
		          },
		          large : {
		            width : 60,
		            height : 82
		          }
		        };

		        var tileWidth = tileDimensions[$scope.size].width, tileHeight = tileDimensions[$scope.size].height;

		        var tileSizeOffset = {
		          small : 10,
		          medium : 14,
		          large : 20
		        };

		        var offset = {
		          small : [ {
		            top : 270,
		            left : 20
		          }, {
		            top : 270,
		            right : 20
		          }, {
		            left : 20,
		            bottom : 270
		          }, {
		            right : 20,
		            bottom : 270
		          } ],
		          medium : [ {
		            top : 220,
		            left : -140
		          }, {
		            top : 220,
		            right : -140
		          }, {
		            left : -140,
		            bottom : 280
		          }, {
		            right : -140,
		            bottom : 280
		          } ]
		        };

		        var secondRowBottomOffset = {
		          small : 3,
		          medium : 6
		        };

		        var style = offset[$scope.size][seatIndex];

		        var mount = 0, tileTopOffset = tileIndex === 0 ? 1 : tileIndex
		            * tileSizeOffset[$scope.size], tileLeftOffset = tileIndex === 0 ? tileWidth
		            : tileIndex * tileWidth, tileBottomOffset = tileIndex === 0 ? 1
		            : tileIndex
		                * (tileSizeOffset[$scope.size] + secondRowBottomOffset[$scope.size]);

		        if (tileIndex >= 17) {
			        mount++;
			        tileTopOffset = (tileIndex % 17) * tileSizeOffset[$scope.size]
			            + 25;
			        tileBottomOffset = (tileIndex % 17)
			            * (tileSizeOffset[$scope.size] + secondRowBottomOffset[$scope.size])
			            + 5;
		        }

		        switch (seatIndex) {
			        case 0:
				        style.top += mount * (tileSizeOffset[$scope.size])
				            - (tileTopOffset);
				        style.left += mount * (tileSizeOffset[$scope.size] / 10)
				            + (tileIndex >= 17 ? tileIndex % 17 : tileIndex)
				            * tileWidth;
				        break;
			        case 1:
				        style.top += mount * (tileSizeOffset[$scope.size])
				            - (tileTopOffset);
				        style.right += mount * (tileSizeOffset[$scope.size] / 10)
				            + (tileIndex >= 17 ? tileIndex % 17 : tileIndex)
				            * tileWidth;
				        break;
			        case 2:
				        style.bottom += mount * (tileSizeOffset[$scope.size])
				            - (tileBottomOffset);
				        style.left += mount * (tileSizeOffset[$scope.size] / 10)
				            + (tileIndex >= 17 ? tileIndex % 17 : tileIndex)
				            * tileWidth;
				        break;
			        case 3:
				        style.bottom += mount * (tileSizeOffset[$scope.size])
				            - (tileBottomOffset);
				        style.right += mount * (tileSizeOffset[$scope.size] / 10)
				            + (tileIndex >= 17 ? tileIndex % 17 : tileIndex)
				            * tileWidth;
				        break;
			        default:
				        console.log(seatIndex, 'Error')
		        }

		        for ( var positions in style) {
			        if (style.hasOwnProperty(positions)) {
				        style[positions] += 'px';
			        }
		        }

		        return style;
	        };

	        $scope.order = function() {
		        var tileList = $scope.scrambledTiles;
		        $scope.seatWalls = [];
		        var wall = 0;

		        for ( var i = 0; i < tileList.length; i++) {
			        if (i == 0) {
				        $scope.seatWalls[wall] = [];
			        } else if (i % 34 == 0) {
				        $scope.seatWalls[++wall] = [];
			        }

			        $scope.seatWalls[wall].push(tileList[i]);
		        }

		        $scope.scrambledTiles = [];
		        $scope.showFirstDescription = false;
		        $scope.showSecondDescription = true;
	        };

	        $scope.fullSeatDiceThrow = function() {
		        var seatDiceThrow = [];
		        var dice = 0;

		        for ( var i = 1; i <= $scope.seatWalls.length; i++) {
			        dice = 2 + Math.floor(Math.random() * 10);
			        console.log('seat ' + (i) + ' threw dice = ' + dice);
			        seatDiceThrow.push({
			          seat : i,
			          diceThrow : dice
			        });
		        }

		        seatDiceThrow.sort(function(seatA, seatB) {
			        return seatB.diceThrow - seatA.diceThrow;
		        });

		        $scope.seats = [];

		        for ( var i = 1; i <= $scope.seatWalls.length; i++) {
			        var eachWall = $scope.seatWalls[i - 1];

			        for ( var j = 0; j < seatDiceThrow.length; j++) {
				        if (seatDiceThrow[j].seat == i)
					        $scope.seats.push({
					          seat : seatDiceThrow[j].seat,
					          order : j,
					          wallToDraw : $scope.seatWalls[i - 1],
					          wind : $scope.windsOrder[j]
					        });
			        }
		        }

		        $scope.showSecondDescription = false;
		        $scope.showThirdDescription = true;
	        };

	        $scope.drawDiceThrow = function() {
		        var dice = 2 + Math.floor(Math.random() * 10);
		        $scope.diceToDraw = dice;

		        var seatOrdered = $scope.seats.slice();
		        seatOrdered.sort(function(a, b) {
			        return a.order - b.order;
		        });

		        var randomSeatSelected = dice % 4 > 0 ? (dice % 4 - 1) : 0;

		        $scope.startingSeatToDrawFrom = seatOrdered[randomSeatSelected];
		        $scope.startingWallToDraw = $scope.startingSeatToDrawFrom.wallToDraw;

		        $scope.showThirdDescription = false;
		        $scope.showFourthDescription = true;

	        };

	        $scope.drawTiles = function() {
		        var tilesDrawn = [];

		        console.log('dice:' + $scope.diceToDraw, 'starting from:'
		            + $scope.startingSeatToDrawFrom.seat);

		        for ( var i = 0; i < $scope.seats.length; i++) {
			        $scope.seats[i].handTiles = [];
			        console.log('SEAT ' + (i + 1), $scope.seats[i].wallToDraw);
		        }

		        var seatOrdered = $scope.seats.slice();
		        seatOrdered.sort(function(a, b) {
			        return a.order - b.order;
		        });

		        var i = 0, completed = false, toPlayerHand = {};
		        console.log('before entering', 'DICE ROLLED: ' + $scope.diceToDraw)
		        do {

			        if (seatOrdered[i].seat === $scope.startingSeatToDrawFrom.seat) {
			        	console.log('ARRAY LENGTH: ', seatOrdered[i].wallToDraw.length);
				        var j1 = $scope.diceToDraw - 1, j2 = $scope.diceToDraw
				            + Math.floor(seatOrdered[i].wallToDraw.length / 2) - 2, toPlayerHand = [], k = 0, tileDrawn = [];
				        var bottomTile = {}, topTile = {};
				        toPlayerHand.push($scope.seats[i]);

				        do {
					        tileDrawn = [];
					        console.log('tiles in player ' + k,
					            toPlayerHand[k].handTiles.length);

					        console.log(j1, j2, "IN HAND? " + toPlayerHand[k].handTiles.length);
					        
					        if (toPlayerHand[k].handTiles.length === 12) {
						        k++;
						        j1 = 0;
						        j2 = Math.floor(seatOrdered[i].wallToDraw.length / 2) - 1;
						        toPlayerHand.push(seatOrdered[i]);
					        } else if(toPlayerHand[k].wallToDraw.length - 12 === $scope.diceToDraw)  {
					        	i++;
					        	k++;
					        	toPlayerHand.push(seatOrdered[i]);
					        } else if(seatOrdered[i].wallToDraw[j2] === undefined)  {
					        	k++;
					        	i++;
					        	j1 = 0; 
					        	j2 = Math.floor(seatOrdered[i].wallToDraw[j2].length / 2) - 1;
					        }
					        
					        bottomTile = seatOrdered[i].wallToDraw.splice(j1, 1)[0];
					        topTile = seatOrdered[i].wallToDraw.splice(j2, 1)[0];

					        //j += 1;
					        j1 += 1;
					        j2 += 1;
					        
					        toPlayerHand[k].handTiles.push(bottomTile);
					        toPlayerHand[k].handTiles.push(topTile);
					       console.log(toPlayerHand[k].handTiles)
					        if (j2 === seatOrdered[i].wallToDraw.length && !completed
					            && i < seatOrdered.length) {
						        j1 = 0;
						        j2 = 16;
						        i++;
					        } else if (i >= seatOrdered.length) {
						        break;
					        }
				        } while (i < seatOrdered.length
				            && j2 < seatOrdered[i].wallToDraw.length
				            && seatOrdered[i].wallToDraw.length !== 0);
			        } else {
				        i++;
			        }
		        } while (i < seatOrdered.length);

		        console.log('FINAL SEATS', toPlayerHand, $scope.seats)
		        if(toPlayerHand.length <= $scope.seats.length)  {
			        for(var i = 0; i < $scope.seats.length; i++)  {			        	
			        	$scope.seats[i] = toPlayerHand[i];
			        }
		        }
		        
		        console.log($scope.seats);
		        $scope.showThirdDescription = false;
		        $scope.showFourthDescription = true;
	        };
        });