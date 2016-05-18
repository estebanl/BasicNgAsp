(function () {
    var module = angular.module('app');

    var setupDom = function (element) {
        console.log(element);
        var input = element[0].querySelector("input, textarea, select");

        console.log(angular.element(input).contents());

        var type = angular.element(input).find('type') //input.attributes("type");
        

        if (element.children !== "checkbox" && element.children !== "radio") {
            angular.element(input).addClass("form-control");
            //input.addClass("form-control");
        }

        var label = element[0].querySelector("label");
        angular.element(label).addClass("control-label");
        element.addClass("form-group");
    };

    var link = function (scope, element) {
        setupDom(element);
    };

    var forminput = function () {
        return {
            restrict: "A",
            link: link
        };
    };

    module.directive("forminput", forminput);
})();

//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .directive('directive', directive);

//    directive.$inject = ['$window'];

//    function directive($window) {
//        // Usage:
//        //     <directive></directive>
//        // Creates:
//        // 
//        var directive = {
//            template: "<h1>cosa</h1>",
//            link: link,
//            restrict: 'EA'
//        };
//        return directive;

//        function link(scope, element, attrs) {
//        }
//    }

//})();