'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongTile', function (L10n) {
    return {
      template: '<span></span>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the mahjongTile directive');
    	var lang = L10n.getBrowserLanguage();
    	var tile = JSON.parse(attrs.tile);
    	var showName = attrs.showName === 'true';
    	var size = attrs.size || '';  
    	
    	if(showName)  {
    		element.find('span').text(tile[lang]);
    	}
    	
    	var tileDesignSpan = angular.element('<span></span>').addClass(size);
    	var suitClasses = {"B": 'bam', "C": 'char', "D": 'circle', "H": "honor", "W": "wind"};
    	
    	var dragonClasses = {"R": "red-dragon", "G": "green-dragon", "W": "white-dragon"};
    	var windClasses = {"E": "east-wind", "S": "south-wind", "W": "west-wind", "N": "north-wind"};
    	
    	
    	element.append(tileDesignSpan);    	
      }
    };
  });
