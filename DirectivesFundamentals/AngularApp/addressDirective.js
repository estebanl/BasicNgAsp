(function () {

    var module = angular.module('app');

    module.directive('addressDirective', addressDirective);

    function addressDirective() {
        return {
            templateUrl: "/AngularApp/addressDirective.html",
            scope:{
                user:"="
            },
            controller: function ($scope) {
                $scope.collapsed = false;
                $scope.collapse = function () {
                    $scope.collapsed = !$scope.collapsed;
                }
            }
        }
    }

})();