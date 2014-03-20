'use strict';

angular.module('mahjongLearnAppApp').service(
    'L10n',
    [
        '$rootScope',
        '$resource',
        function($rootScope, $resource) {
	        // AngularJS will instantiate a singleton by calling "new" on this
	        // function

	        var prefixes = {
	          language : 'mah.language',
	          textKeys : 'mah.textKeys',
	          textValues : 'mah.textValues'
	        };

	        function getBrowserLanguage() {
		        return navigator.language.substring(0, 2)
		            || navigator.userLanguage.substring(0, 2);
	        }

	        this.language = getBrowserLanguage();

	        this.getTextsForView = function(callback) {
		        return $resource('/static/texts.json').get(callback);
	        };

	        this.getLanguage = function(storageAPI) {
		        return getLanguage() || (storageAPI ? storageAPI[prefixes.language] : null) || getBrowserLanguage();
	        }

	        function getLanguage() {
		        console.log('from service L10n in rootscope', $rootScope.language);
		        return $rootScope.language;
	        }

	        this.setLanguage = function(lang) {
		        $rootScope.$broadcast('languageChange', this.language);
	        };

	        $rootScope.pushTextsToStorage = function(textsObject, storageAPI) {
		        /*
						 * if (L1.language) storageAPI.setItem()
						 */
	        };

	        $rootScope.getTextsFromStorage = function() {

	        };

	        $rootScope.setLanguage = function(language, storageAPI, localSet) {
		        var newOverallLanguage = language;

		        if (newOverallLanguage) {
			        newOverallLanguage = language;
		        } else if (getLanguage()) {
			        newOverallLanguage = getLanguage();
		        } else {
			        // Fallback using browser language
			        newOverallLanguage = getBrowserLanguage();
		        }

		        storageAPI.setItem(prefixes.language, newOverallLanguage);
		        $rootScope.language = newOverallLanguage;
		        $rootScope.$broadcast('languageChange', 'I dont know');
	        };

	        $rootScope.getLanguage = function(storageAPI) {
		        if (storageAPI) {
			        return storageAPI.getItem(prefixes.language) || getLanguage();
		        } else
			        return getLanguage();
	        };

        } ]);
