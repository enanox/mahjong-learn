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
		          // element.text('this is the mahjongComplementImage directive');
		          var localizedTexts = scope.localized;
		          var language = L10n.getBrowserLanguage();

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
