(function () {

    var module = angular.module('app');

    module.directive('userInfoCard', userInfoCard);

    function userInfoCard() {
        return {
            templateUrl: "/AngularApp/directive.html",
            restrict: "E",
            replace: true,
            //scope: true,
            scope: {
                user:"="
            },
            controller: function ($scope) {
                var vm = this;
                $scope.clickme = function () {
                    $scope.messageClick = "Click me!!!";
                }

                $scope.nextState = function () {
                   
                    $scope.user.level++;
                    $scope.user.level = $scope.user.level % 4;
                    console.log($scope.user);
                }

                console.log($scope);

                $scope.collapsed = false;
                $scope.collapse = function () {
                    $scope.collapsed = !$scope.collapsed;
                }

                $scope.removeFriend = function (friend) {
                    var idx = $scope.user.friends.indexOf(friend);
                    if (idx > -1) {
                        $scope.user.friends.splice(idx, 1);
                    }
                }
            }
        }

      
    }
})();