'use strict';

angular.module('mahjongLearnAppApp')
  .filter('postfix', function (L10n) {
    return function (input) {
    	var postfixesByLanguage = L10n.getTexts() ? L10n.getTexts().postfixNumbers[L10n.getLanguage()] : 'st';
    	
      return input <= 4 ? input + '' + postfixesByLanguage[input - 1] : input + '' + postfixesByLanguage[3];
    };
  });
