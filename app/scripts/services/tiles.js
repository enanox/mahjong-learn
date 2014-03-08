'use strict';

angular
    .module('mahjongLearnAppApp')
    .factory(
        'Tiles',
        function(L10n, $resource) {
	        // Service logic
	        // ...
	        // var language = L10n.getBrowserLanguage();
	        var meaningOfLife = 42;

	        var getResource = function() {
		        return $resource('/static/tiles.json', {}, {
			        getData : {
			          isArray : false,
			          method : 'GET'
			        }
		        });
	        };

	        var loadTilesFromServer = function() {
		        return $resource('/static/tiles.json').get();
	        };

	        var getTiles = function() {
		        return loadTilesFromServer();
	        };

	        var joinTiles = function(tileObject) {
		        var cloneData = function(o) {
			        var newObject = {};

			        for ( var prop in o) {
				        if (o.hasOwnProperty(prop)) {
					        newObject[prop] = o[prop];

					        for ( var prop2nd in o[prop]) {
						        newObject[prop][prop2nd] = o[prop][prop2nd];
					        }
				        }
			        }

			        return newObject;
		        };

		        var index = [ {
		          'firstOrder' : 'suitsNumbered',
		          'list' : 'pieces',
		          'each' : [ 'bams', 'circles', 'characters' ]
		        }, {
		          'firstOrder' : 'honors',
		          'list' : 'pieces',
		          'each' : [ 'dragons', 'winds' ]
		        } ];

		        var newArray = [];
		        var firstOrder = '', each = '';
		        var doraPosition = {
		          'B' : {
		            'value' : 5,
		            'doraFound' : false
		          },
		          'D' : {
		            'value' : 5,
		            'doraFound' : false
		          },
		          'C' : {
		            'value' : 5,
		            'doraFound' : false
		          }
		        };

		        for ( var i = 0; i < index.length; i++) {
			        firstOrder = index[i].firstOrder;

			        if (tileObject.hasOwnProperty(firstOrder)) {
				        for ( var j = 0; j < index[i].each.length; j++) {
					        each = index[i].each[j];

					        if (tileObject[firstOrder].hasOwnProperty(each)) {
						        for ( var k = 0; k < tileObject[firstOrder][each].pieces.length; k++) {
							        var joinedTile = tileObject[firstOrder][each].pieces[k];
							        var kj = 4;
							        var doraCount = null;

							        if (joinedTile.hasOwnProperty('attr')) {
								        if (joinedTile.attr.hasOwnProperty('doraCount')) {
									        doraCount = joinedTile.attr.doraCount;
								        }
							        }
							        var newTile = null;
							        do {

								        newTile = cloneData(joinedTile);
								        var tileSuit = newTile.name.suit;

								        if (newTile.attr && newTile.name.value === 5 && doraPosition.hasOwnProperty(tileSuit)) {
									        if (doraCount > 0) {
										        newTile.attr.dora = true;
										        doraCount--;

										        newArray.push(newTile);
									        } else if (doraCount === 0) {
										        var otherTile = cloneData(joinedTile);
										        delete otherTile.attr;
										        newArray.push(otherTile);
									        }
								        } else {
									        newArray.push(newTile);
								        }
							        } while (--kj > 0);
						        }
					        }
				        }
			        }
		        }

		        return newArray;
	        };

	        var shuffle = function(tileList) {
		        for ( var i, tmp, n = tileList.length; n; i = Math.floor(Math
		            .random() * n), tmp = tileList[--n], tileList[n] = tileList[i], tileList[i] = tmp)  {
		        
		        }
		        
		        return tileList;
	        };
	        // Public API here
	        return {
	          getResource : getResource,
	          getTiles : getTiles,
	          joinTiles : joinTiles,
	          shuffle : shuffle,
	          someMethod : function() {
		          return meaningOfLife;
	          }
	        };
        });
