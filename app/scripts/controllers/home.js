'use strict';

angular.module('mahjongLearnApp').controller('HomeCtrl', function ($scope, $timeout, $interval) {
    $scope.language = $scope.getLanguage();
    $scope.texts = $scope.getTexts() && $scope.getTexts().Home;
    
    $scope.$on('languageChange', function(event, args) {
        $scope.language = args.newLanguage;
    });
    
    $scope.continueVisible = false;

    function init() {
        $interval(function() {
            $timeout(function() {
                $scope.visible = !$scope.visible;
                showLegends();
            }, 4000);
        }, 10000);
    }

    function showLegends() {
        $scope.visibleBefLegend = !$scope.visibleBefLegend;
        $scope.visibleLegend = !$scope.visibleLegend;
        $scope.continueVisible = true;
    }

    init();
});
