(function () {

    var module = angular.module('app');

    module.component('ejemploComponent', {
        templateUrl: 'app/example/formulario.component.html',
        controllerAs: 'vm',
        controller: function (ciudadesServicio, $uibModal) {
            var vm = this;
            vm.ciudades = [];
            vm.zonas = [];
            vm.subZonas = [];
            vm.user = {
                name: "Esteban",
                lastName: "",
                city: "",
                zona: "Antonio nariño",
                subZona: "Ciudad berna",
                date: "12/02/2016"
            };

            vm.$onInit = function () {
                ciudadesServicio.getAll().then(function (data) {
                    vm.ciudades = data.data;
                    vm.user.city = vm.ciudades[0];
                }).catch(function (error) {
                })
            };

            vm.getZonas = function (ciudad) {
                ciudadesServicio.getZona(ciudad.tipo).then(function (data) {
                    vm.zonas = data.data;
                    vm.user.zona = vm.zonas[0];
                }).catch(function (error) {
                    toastr['error']('Algo salio mal ' + error.statusText);
                });
            };

            vm.getSubZonas = function (zona) {
                ciudadesServicio.getZona(zona.tipo).then(function (data) {
                    console.log(data.data);
                    vm.subZonas = data.data;
                    vm.user.subZona = vm.subZonas[0];
                }).catch(function (error) {
                    toastr['error']('Algo salio mal ' + error.statusText);
                });
            }

            vm.save = function (user) {
                var modalInstance = $uibModal.open({
                    templateUrl: "modalConfirmSave.html",
                    controllerAs: "vmModal",
                    resolve:{
                        user: function () {
                            return vm.user;
                        }
                    },
                    controller: function ($scope, $uibModalInstance,user) {
                        var vmModal = this;
                        vmModal.user = user;
                        vmModal.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        }
                        vmModal.ok = function () {
                            console.log('ok');
                            $uibModalInstance.close(vmModal.user);
                        }
                    }
                });

                modalInstance.result.then(function (result) {
                    console.log(result);
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            }

            //Date options
            vm.format = 'dd-MMMM-yyyy';
            vm.popup = {
                opened: false
            };
            vm.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
            vm.altInputFormats = ['M!/d!/yyyy'];
            vm.open = function () {
                vm.popup.opened = true;
            }
            //Date options
        }
    });


})();