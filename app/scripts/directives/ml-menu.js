'use strict';

angular.module('mahjongLearnApp').directive('mlMenu', function ($rootScope, L10n) {
    return {
        scope: {},
        bindToController: {
            menu: "="
        },
        controllerAs: "mlMenu",
        restrict: 'EA',
        template: '<nav class="menu navbar navbar-default">'+
                  '<ul class="nav navbar-nav">'+
                  '<li ng-repeat="option in mlMenu.menu"><a href="#{{option.text.link}}">{{option.text[mlMenu.language]}}</a></li>'+
                  '</ul>'+
                  '</nav>',
        controller: function () {
            var self = this;
            self.language = L10n.getLanguage(localStorage);
            
            $rootScope.$on('languageChange', function () {
                self.language = L10n.getLanguage(localStorage);
            });
        },
        link: function (scope, element, attrs) {
        //element.text('this is the mahjongMenu directive');
        }
    };
});
