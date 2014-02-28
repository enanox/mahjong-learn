'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongTitle', function () {
    return {
      template: '<div class="logo"><img src=""/></div>'+
      			'<div class="title"><h1>Mahjong Learn</h1></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the mahjongTitle directive');
      }
    };
  });
