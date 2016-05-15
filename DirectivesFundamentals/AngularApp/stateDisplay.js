(function () {

    var module = angular.module('app');

    module.directive('stateDisplay',stateDisplay)


    function stateDisplay() {
        return {
            link: function (scope, el, attrs) {
                var params = attrs['stateDisplay'].split(' ');
                var linkVar = params[0];
                var classes = params.slice(1);

                scope.$watch(linkVar, function (newVal) {
                    el.removeClass(classes.join(' '));
                    el.addClass(classes[newVal]);
                });
            }
        }
    }

})();