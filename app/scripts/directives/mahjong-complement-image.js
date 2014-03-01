'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongComplementImage', function (L10n) {
    return {      
      scope: { localized: "=" },
      transclude: true,
      template: '<span></span><span class="text"></span>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the mahjongComplementImage directive');
    	  var decor = (scope.localized ? scope.localized.decoration : '');
    	  var language = L10n.getBrowserLanguage();
    	  console.log(scope.localized)
    	  if(decor != '')  {    
    		  var img = element.find('span:first');
    		  img.addClass('decoration').css({"background-image":"url("+decor+")"});
    		  element.find('span:last').text(scope.localized[language]);    		  
    	  }
      }
    };
  });
