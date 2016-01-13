'use strict';

angular.module('mahjongLearnApp').directive(
    'mlTitle',
    function ($rootScope) {
	    return {
	      restrict : 'A',
          require: "mlTitle",
	      replace : true,
          scope: {},
	      template : '<header class="header-app">' 
	      		+ '<div class="header-left">'
	          + '<div class="logo"><img src=""/></div>' + '<div class="title">'
	          + '<h1>Mahjong Learn</h1>' + '</div>' + '</div>'
	          + '<div class="header-right">'
	          + '<button class="btn" ng-class="{ \'btn-primary\': mlTitle.language == \'en\', \'btn-default\': mlTitle.language != \'en\'}" ng-click="mlTitle.localize(\'en\')">EN</button>'
	          + '<button class="btn" ng-class="{ \'btn-primary\': mlTitle.language == \'es\', \'btn-default\': mlTitle.language != \'es\'}" ng-click="mlTitle.localize(\'es\')">ES</button>'
	          + '</div>'
	          +'</header>',
          bindToController: {},
          controllerAs: "mlTitle",
          controller: function () {
            var self = this;
            self.language = $rootScope.getLanguage();
            
            self.localize = function (newLang) {
                self.language = newLang;
                $rootScope.setLanguage(newLang);   
            };   
          },
	      link : function postLink(/* scope, element, attrs */) {
		      // element.text('this is the mahjongTitle directive');
	      }
	    };
    });
