'use strict';

angular.module('mahjongLearnApp').directive('mlContinueButton', function ($rootScope, $location, L10n) {
    return {
        template: '<div class="before-footer">'+
                  '<button class="btn btn-primary continue" ng-show="mlContinueButton.continueVisible" ng-click="mlContinueButton.continue()">{{ mlContinueButton.literal }}</button>'+
                  '</div>',
        scope: {},
        require: ["mlContinueButton"],
        bindToController: {
            continueVisible: "=",
            texts: "="  
        },
        controllerAs: "mlContinueButton",
        restrict: 'EA',
        controller: function () {
            var self = this;
            var language = L10n.getLanguage(localStorage);
            self.literal = self.texts[language];

            $rootScope.$on("languageChange", function () {
                language = L10n.getLanguage(localStorage);
                self.literal = self.texts[language];    
            });

            self.continue = function () {
                $location.url(self.texts.link);
            };
        },
        link: function () {}
    };
});
