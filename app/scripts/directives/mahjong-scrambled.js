'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongScrambled', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mahjongScrambled directive');
      }
    };
  });
