(function () {

    var module = angular.module('app');

    module.component('selectsComponents', {
        templateUrl: 'app/selects.component.html',
        controllerAs: 'vm',
        controller: function (serviceData) {
            var vm = this;

            vm.$onInit = function () {
                serviceData.getAll().then(function (data) {
                    vm.values = data.data;
                    vm.selected = data.data[0];
                }).catch(function (error) {
                    vm.error = error;
                });

                serviceData.getAll().then(function (data) {
                    vm.values2 = data.data;
                   vm.selected2 = data.data[0];
                }).catch(function (error) {
                    vm.error = error;
                });
            }

            vm.getChildren = function (selected) {
                console.log(selected);
                serviceData.getByType(selected.tipo).then(function (data) {
                    vm.tipos = [];
                    vm.tipos = data.data;
                    vm.tipo = data.data[0];
                   // console.log(data.data);
                }).catch(function (error) {
                 //   console.log(error);
                });
            }
        }
    })

})();