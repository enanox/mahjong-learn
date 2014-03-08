'use strict';

angular.module('mahjongLearnAppApp')
  .filter('shuffleStart', function () {
    return function (input) {   
      return 1 + (Math.random() * 6);
    };
  });
