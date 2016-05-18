(function() {
    'use strict';

    angular
        .module('app')
        .directive('directive', directive);

    directive.$inject = ['$window'];
    
    function directive ($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        // 
        var directive = {
            template:"<h1>cosa</h1>",
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();