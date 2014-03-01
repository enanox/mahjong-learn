'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongMenu', function () {
    return {   
      restrict: 'A',
      replace: true,
      template: '<nav class="menu">'+
      			'<ul>'+
      			'<li ng-repeat="o in menu"><a href="{{o.text.link}}">{{o.text[language]}}</a></li>'+
      			'</ul>'+
      			'</nav>',      
      link: function postLink(scope, element, attrs) {
        //element.text('this is the mahjongMenu directive');
    	  
      }
    };
  });
