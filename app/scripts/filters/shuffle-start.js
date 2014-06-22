'use strict';

angular.module('mahjongLearnApp').filter('shuffleStart', function() {
	return function(/*input*/) {
		return 1 + (Math.random() * 6);
	};
});
