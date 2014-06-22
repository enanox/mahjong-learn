'use strict';

angular.module('mahjongLearnApp').directive('mlTile', function(L10n) {
	return {
	  template : '<span></span>',
	  restrict : 'A',
	  link : function postLink(scope, element, attrs) {
		  var lang = L10n.getLanguage(localStorage);
		  var tile = JSON.parse(attrs.tile);
		  var showName = attrs.showName === 'true';
		  var size = attrs.size || '';
		  var seatPosition = attrs.seat || '';

		  if (showName) {
			  element.find('span').text(tile[lang]);
		  }

		  var tileDesignSpan = angular.element('<span></span>').addClass(size);
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

		  tileDesignSpan.addClass(suitClasses[tile.suit]);

		  switch (tile.suit) {
			  case 'H':
				  tileDesignSpan.addClass(dragonClasses[tile.value]);
				  break;
			  case 'W':
				  tileDesignSpan.addClass(windClasses[tile.value]);
				  break;
			  default:
				  tileDesignSpan.addClass(tile.en);
		  }

		  if (seatPosition) {
			  switch (seatPosition) {
				  case '1':
					  tileDesignSpan.addClass('shuffled-27');
					  break;
				  case '2':
					  tileDesignSpan.addClass('shuffled24');
					  break;
				  case '3':
					  tileDesignSpan.addClass('shuffled33');
					  break;
				  case '4':
					  tileDesignSpan.addClass('shuffled-33');
					  break;
			  }
		  }

		  element.append(tileDesignSpan);
	  }
	};
});