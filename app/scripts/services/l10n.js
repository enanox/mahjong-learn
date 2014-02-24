'use strict';

angular.module('mahjongLearnAppApp')
  .service('L10n', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	  this.getBrowserLanguage = function()  {
		  return navigator.language.substring(0,2) || navigator.userLanguage.substring(0,2);
	  };
	  
	  this.loadTextsForView = function() {
		  return $http.get('/static/texts.json');
	  };
	  
	  this.getTextForView = function(view)  {
		  var texts = {};
		  this.loadTextsForView()
		  	.success(function(staticTexts) {
		  		texts[view] = staticTexts;
		  		
		  		return texts[view];
		  	});
	  };
	  
  }]);
