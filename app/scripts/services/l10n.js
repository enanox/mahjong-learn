'use strict';

angular.module('mahjongLearnAppApp')
  .service('L10n', function L10n() {
    // AngularJS will instantiate a singleton by calling "new" on this function
	  this.getBrowserLanguage = function()  {
		  return navigator.language || navigator.userLanguage;
	  }
  });
