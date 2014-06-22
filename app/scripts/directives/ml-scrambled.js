'use strict';

angular.module('mahjongLearnApp')
  .directive('mlScrambled', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element/*, attrs*/) {
        element.text('this is the mlScrambled directive');
      }
    };
  });
