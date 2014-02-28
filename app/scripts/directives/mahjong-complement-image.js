'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongComplementImage', function () {
    return {      
      transclude: true,
      template: '<span></span><span>{{ h.text[language] }}</span>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the mahjongComplementImage directive');
    	  var decor = scope.h.text.decoration;
    	  
    	  if(decor != '')  {    
    		  var img = element.find('span:first');
    		  img.addClass('decoration').css({"background-image":"url("+decor+")"});
    		  
    	  }
      }
    };
  });
