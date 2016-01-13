'use strict';

angular.module('mahjongLearnApp').directive('mlTile', function($rootScope, L10n) {
	return {
      templateUrl: "views/partials/ml-tile.html",
	  require: ["mlTile"],
      scope: {},
      bindToController: {
        areFlipped: "=",
        isDora: "=",
        isDragon: "=",
        isWind: "=",
        seat: "=",
        size: "@",
        showName: "=",
        tile: "=",        
      },
      controllerAs: "mlTile",
	  restrict : 'EA',
      controller: function() {},
	  link : function postLink(scope, element, attrs, controllers) {          
          var tileCtrl = controllers[0];
          tileCtrl.lang = L10n.getLanguage(localStorage);
		  var tile = tileCtrl.tile;
		  var size = tileCtrl.size || '';
		  var seatPosition = tileCtrl.seat || '';
          var tileStyles = [];
          tileStyles.push(size);
		  
          var suitClasses = {
		    'B' : 'bam',
		    'C' : 'char',
		    'D' : 'circle',
		    'H' : 'honor',
		    'W' : 'wind'
		  };
		  var dragonClasses = {
		    'R' : 'red-dragon',
		    'G' : 'green-dragon',
		    'W' : 'white-dragon'
		  };
		  var windClasses = {
		    'E' : 'east-wind',
		    'S' : 'south-wind',
		    'W' : 'west-wind',
		    'N' : 'north-wind'
		  };

          tileStyles.push(suitClasses[tile.suit]);
		  switch (tile.suit) {
			  case 'H':
                  tileStyles.push(dragonClasses[tile.value]);
				  break;
			  case 'W':
                  tileStyles.push(windClasses[tile.value]);
				  break;
			  default:
                  tileStyles.push(tile.en);
		  }

		  if (seatPosition) {
			  switch (seatPosition) {
				  case '1':
                      tileStyles.push('shuffled-27');
					  break;
				  case '2':
                      tileStyles.push('shuffled24');
					  break;
				  case '3':
                      tileStyles.push('shuffled33');
					  break;
				  case '4':
                      tileStyles.push('shuffled-33');
					  break;
			  }
		  }
          
          $rootScope.$on("languageChange", function () {
            tileCtrl.lang = L10n.getLanguage(localStorage);    
          });

          tileCtrl.getClasses = function (){
              return tileStyles.join(" ");    
          };
	  }
	};
});