'use strict';

angular.module('mahjongLearnAppApp')
  .directive('mahjongContinueButton', function () {
    return {
      template: '<div class="before-footer">'+
      '<div class="continue" data-ng-show="continueVisible">'+
      '<a href="{{ texts.continue.link }}">{{ texts.continue[language] }}</a>'+
      '</div>'+
      '</div>',
      restrict: 'A',
      replace: true,
      link: function postLink(/*scope, element, attrs*/) {
        //element.text('this is the mahjongContinueButton directive');
      }
    };
  });
