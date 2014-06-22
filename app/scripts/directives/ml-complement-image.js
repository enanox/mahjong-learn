'use strict';

angular
    .module('mahjongLearnApp')
    .directive(
        'mlComplementImage',
        function(L10n, $rootScope) {
	        return {
	          scope : {
		          localized : '='
	          },
	          transclude : true,
	          template : '<span style="background-image: {{bgImage}}"></span><span class="text">{{text}}</span>',
	          restrict : 'A',
	          link : function postLink(scope, element/* , attrs */) {
		          var localizedTexts = scope.localized;
		          var language = L10n.getLanguage(localStorage);
		          element.addClass('complement-image');
		          scope.background = (localizedTexts !== null ? localizedTexts.decoration
		              : '');
		          var textLegend = (localizedTexts !== null ? localizedTexts[language]
		              : '');
		          		          
		          scope.text = textLegend;
		          
		          $rootScope.$on('languageChange', function() {
		          	scope.text = localizedTexts[L10n.getLanguage(localStorage)];
		          });
		          
		          if (scope.background !== '') {		          	
		          	var background = 'url(./' + scope.background + ');';

		          	scope.bgImage = background;
		          	element.children().eq(0).addClass('image');		          	
		          	element.children().eq(1).addClass('centered');
		          }
	          }
	        };
        });
