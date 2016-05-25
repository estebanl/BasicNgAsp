(function () {

    var module = angular.module('app');

    module.component('createContact', {
        templateUrl: 'app/contactos/contact.create.component.html',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.contacto = {
                Identificacion: "",
                Prefijo: "",
                Nombres: "",
                Apellidos: "",
                Ciudad: {},
                Zona: {},
                SubZona: {},
                TipoContacto: {},
                TipoPrioridad: {},
                Cargo: {},
                EsContactoPrincipal: true,
                Sucursales: [],
                Direcciones: [],
                Emails: [],
                Telefonos: [],
                Clientes: []
            };

            vm.agregarTelefonos = function () {
                var contenedorTelefonos = angular.element(document.querySelector('#contenedorTelefonos')).html();
                var extratelefonos = angular.element(document.querySelector('#extratelefonos')).html();
                console.log(extratelefonos);
                angular.element(contenedorTelefonos).append(extratelefonos);
               /// console.log(contenedorTelefonos);
            };
        }
    });

})();