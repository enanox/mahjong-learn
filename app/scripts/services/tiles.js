'use strict';

angular.module('mahjongLearnAppApp')
  .factory('Tiles', function (L10n, $resource) {
    // Service logic
    // ...
	var language = L10n.getBrowserLanguage();	
    var meaningOfLife = 42;

    var loadTilesFromServer = function() {
		  return $resource('/static/tiles.json').get();
	};
	  
    var getTiles = function()  {		
    	return loadTilesFromServer();
	};
	
    // Public API here
    return {
      getTiles: getTiles,
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
