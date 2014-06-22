'use strict';

angular
    .module('mahjongLearnApp')
    .service(
        'L10n',
        [
            '$rootScope',
            '$resource',
            function($rootScope, $resource) {
	            // AngularJS will instantiate a singleton by calling "new" on this
	            // function

	            // Local & private properties
	            var prefixes = {
	              language : 'mah.language',
	              textKeys : 'mah.textKeys',
	              textValues : 'mah.textValues'
	            };

	            var storageAPI = localStorage;
	            var texts = {};
	            // Methods from the L10n API
	            this.language = getBrowserLanguage();

	            this.getTextsForView = function(callback) {
		            return $resource('/static/texts.json').get(callback);
	            };

	            this.getLanguage = function() {
		            return getLanguage()
		                || (storageAPI ? storageAPI[prefixes.language] : null)
		                || getBrowserLanguage();
	            }

	            this.setLanguage = function(lang) {
		            $rootScope.$broadcast('languageChange', this.language);
	            };

	            this.setStorageAPI = function(api) {
		            if (api) {
			            storageAPI = api;
		            }
	            };

	            this.getTexts = function() {
		            return (storageAPI && storageAPI[prefixes.textKeys] ? JSON
		                .parse(storageAPI[prefixes.textKeys]) : null)
		                || texts;
	            };
	            // Helper private methods
	            function getLanguage() {
		            return $rootScope.language;
	            }

	            function getBrowserLanguage() {
		            return navigator.language.substring(0, 2)
		                || navigator.userLanguage.substring(0, 2);
	            }

	            function retrieveTextsFromFile() {
		            return $resource('/static/texts.json')
		                .get(
		                    function(staticTexts) {
			                    texts = staticTexts.texts;
			                    $rootScope.texts = texts;
			                    storageAPI[prefixes.textKeys] = JSON.stringify(texts);
		                    },
		                    function(error) {
			                    throw new ReferenceError(
			                        'The texts for language couldn\'t be loaded by the application.');
		                    });
	            }

	            function getTexts() {
		            return $rootScope.texts;
	            }

	            // General methods for the $rootScope
	            $rootScope.getTexts = function() {
		            if (!getTexts() || !storageAPI.getItem(prefixes.textKeys)) {

			            retrieveTextsFromFile().$promise['finally'](function() {
				            $rootScope.$broadcast('textsLoaded');
			            });
		            } else {
			            return getTexts()
			                || (storageAPI && storageAPI[prefixes.textKeys] ? JSON
			                    .parse(storageAPI.getItem(prefixes.textKeys)) : null);
		            }
	            };

	            $rootScope.setLanguage = function(language) {
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

	            $rootScope.getLanguage = function() {
		            return (storageAPI ? storageAPI.getItem(prefixes.language)
		                : null)
		                || getLanguage() || getBrowserLanguage();
	            };

            } ]);
