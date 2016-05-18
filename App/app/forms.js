(function () {
    var module = angular.module('app');
    module.component('formulario', {
        templateUrl: 'app/form.html',
        controllerAs: 'vm',
        controller: formsController
    })

    function formsController() {
        var vm = this;
        vm.submit = function () {
          //  vm.user = user;
        }
    }
}())