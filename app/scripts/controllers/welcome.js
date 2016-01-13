'use strict';

angular.module('mahjongLearnApp').controller('WelcomeCtrl', function ($scope, $timeout, L10n) {
    $scope.language = $scope.getLanguage();
    
    $scope.$on('languageChange', function(event, args) {
        $scope.language = args.newLanguage;
    });

    // Got the texts from NavbarCtrl
    $scope.texts = $scope.getTexts() ? $scope.getTexts().Welcome : null;
    $scope.visible = false;

    $timeout(function() {
        $scope.visible = true;
        $scope.continueVisible = true;
    }, 1500);
});
