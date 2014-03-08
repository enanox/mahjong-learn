'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongTitle', function () {
    return {
      restrict: 'A',
      replace: true,
      template: '<header class="header-app"><div class="logo"><img src=""/></div>'+
      '<div class="title"><h1>Mahjong Learn</h1></div></header>',
      link: function postLink(/*scope, element, attrs*/) {
        //element.text('this is the mahjongTitle directive');
      }
    };
  });
