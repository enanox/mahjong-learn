'use strict';

angular.module('mahjongLearnApp').filter(
    'postfix',
    function(L10n) {
	    return function(input) {
		    var postfixesByLanguage = L10n.getTexts()
		        && L10n.getTexts().hasOwnProperty('postfixNumbers') ? L10n
		        .getTexts().postfixNumbers[L10n.getLanguage()] : [ 'st', 'nd',
		        'rd', 'th' ];

		    return input <= 4 ? input + '' + postfixesByLanguage[input - 1] : input
		        + '' + postfixesByLanguage[3];
	    };
    });
