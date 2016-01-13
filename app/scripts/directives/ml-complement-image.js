'use strict';

angular.module('mahjongLearnApp').directive('mlComplementImage', function (L10n, $rootScope) {
    return {
        require: ["mlComplementImage"],
        scope: {},
        bindToController: {
            localized : '='
        },
        controllerAs: "mlComplementImage",
        template: '<span style="background-image: {{ mlComplementImage.bgImage }}" ng-class="{ image: !!mlComplementImage.bgImage }"></span><span class="text" ng-class="{ centered: mlComplementImage.bgImage }">{{mlComplementImage.text}}</span>',
        restrict: 'EA',
        controller: function () {},
        link: function postLink(scope, element, attrs, controllers) {
            var imageCtrl = controllers[0];
            var localizedTexts = imageCtrl.localized;
            var language = L10n.getLanguage(localStorage);
            
            element.addClass('complement-image');
            imageCtrl.background = !!localizedTexts && localizedTexts.decoration;
            imageCtrl.bgImage = !!imageCtrl.background && 'url(./' + imageCtrl.background + ');';
            imageCtrl.text = !!localizedTexts && localizedTexts[language];
            
            $rootScope.$on('languageChange', function() {
                imageCtrl.text = localizedTexts[L10n.getLanguage(localStorage)];
            });
        }
    };
});
