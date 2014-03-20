'use strict';

angular
    .module('mahjongLearnAppApp')
    .directive(
        'mahjongComplementImage',
        function(L10n) {
	        return {
	          scope : {
		          localized : '='
	          },
	          transclude : true,
	          template : '<span></span><span class="text"></span>',
	          restrict : 'A',
	          link : function postLink(scope, element/* , attrs */) {
		          var localizedTexts = scope.localized;
		          var language = L10n.getLanguage(localStorage);

		          var decor = (localizedTexts !== null ? localizedTexts.decoration
		              : '');
		          var textLegend = (localizedTexts !== null ? localizedTexts[language]
		              : '');

		          var textElement = element.find('span:last');
		          textElement.text(textLegend);

		          if (decor !== '') {
			          var img = element.find('span:first');
			          img.addClass('decoration').css({
				          'background-image' : 'url(' + decor + ')'
			          });
			          textElement.addClass('centered');
		          }
	          }
	        };
        });
