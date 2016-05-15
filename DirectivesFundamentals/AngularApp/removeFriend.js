(function () {

    var module = angular.module('app');

    module.directive('removeFriend', function () {
        return {
            templateUrl: "/AngularApp/removeFriend.html",
            restrict: "E",
            scope:{
                notifyParent: '&method'
            },
            controller: function ($scope) {
                $scope.removing = false;
                $scope.startRemove = function () {
                    $scope.removing = true;
                }

                $scope.cancelRemove = function () {
                    $scope.removing = false;
                }

                $scope.confirmRemove = function () {
                    $scope.notifyParent();
                }
            }
        }
    })

})();