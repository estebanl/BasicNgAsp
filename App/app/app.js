(function () {

    var module = angular.module('app', ['ngComponentRouter']);

    module
      /*  .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })*/
    .value('$routerRootComponent', 'app')
    .component('app', {
        templateUrl: "/app/app.html",
        controllerAs: 'vm',
        controller: function (crud) {

            var vm = this;
            
            vm.$onInit = function () {
                crud.getAll().then(function (data) {
                    vm.clients = data.data;
                    console.log(data);
                }).catch(function (error) {
                    console.logS(error);
                })
            }

            vm.create = function (cliente) {
                crud.create(cliente).then(function (data) {
                    console.log(data.data);
                }).catch(function (error) {
                    console.log(error.data);
                })
            }

            vm.update = function (cliente) {
                crud.update(cliente).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                })
            }

            vm.delete = function (cliente) {
                crud.eliminar(cliente).then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                })
            }

        },
        $routeConfig: [
            { path: "/primer/...", name: 'Primero', component: 'primer', useAsDefault: true },
            { path: "/forms", name: 'Forms', component: 'formulario' },
            { path: "/segundo/:id", name: 'Segundo', component: 'segundo' },
        ]
    })


    module.component('primer', {
        templateUrl: "/app/primer.html",
        $routeConfig: [
            { path: "/tercero", name: 'Tercero', component: 'tercero', useAsDefault: true },
            { path: "/cuarto", name: "Cuarto", component: 'cuarto' }
        ]
    })


    module.component('segundo', {
        template: "This is second",
        bindings:{
            $router:"<"
        },
        controller: function () {
            var vm = this;
            vm.$routerOnActivate = function (next) {
                console.log(next.params.id);
            }
        }
    })

    module.component('tercero', {
        templateUrl: "/app/tercero.html",
        $routeConfig: [
            { path: "/sexto", name: "Sexto", component: 'sexto', useAsDefault: true },
            { path: "/quinto", name:"Quinto", component:'quinto'}
        ]
    })

    module.component('cuarto', {
        template:"This is four"
    })

    module.component('quinto', {
        template:"This is five"
    })

    module.component('sexto', {
        template:"This is six"
    })
})();