(function () {

    var module = angular.module('app');

    module.component('appComponent', {
        templateUrl: '/AngularApp/app.component.html',
        controllerAs: 'vm',
        controller: appController
    });


    function appController($scope) {
        var vm = this;
        vm.message = "This is a component";
        vm.user = {
            name: "Pepito ramirez",
            level: 0,
            address: [
                "Calle 1",
                "Calle 2",
                "Calle 3"
            ],
            friends: [
             "Ana",
             "Laura",
             "Juana"
            ]
        }

        vm.user2 = {
            name: "Juan ramirez",
            level:0,
            address: [
                "Calle 1",
                "Calle 2",
                "Calle 3"
            ],
            friends: [
             "Ana",
             "Laura",
             "Juana"
            ]
        }

        console.log(vm);
        console.log($scope);
    }
})();