'use strict';

angular.module('mahjongLearnAppApp').service(
    'L10n',
    [
        '$rootScope',
        '$resource',
        function($rootScope, $resource) {
	        // AngularJS will instantiate a singleton by calling "new" on this
					// function

	        this.getBrowserLanguage = function() {
		        return navigator.language.substring(0, 2)
		            || navigator.userLanguage.substring(0, 2);
	        };

	        this.language = this.getBrowserLanguage();

	        this.getTextsForView = function(callback) {
	        	return $resource('/static/texts.json').get(callback);
	        };

	        this.getLanguage = function() {
		        return this.language;
	        };

	        this.setLanguage = function(lang) {
		        this.language = lang;
		        $rootScope.$broadcast('languageChange',this.language);
	        };

        } ]);
