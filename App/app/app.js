(function () {

    var module = angular.module('app', ['ngComponentRouter','ui.bootstrap','ngMessages']);

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
            
            vm.emails = [];
            vm.agregarEmail = function (email) {
                if (! (vm.emails.indexOf(vm.correo) > -1)) {
                    vm.emails.push(vm.correo);
                }
            };
            vm.remove = function (em) {
                console.log(em);
                var index = vm.emails.indexOf(em);
                if (index> -1) {
                    vm.emails.splice(index, 1);
                }
                
                console.log(index);
            };

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
            { path: "/selects", name: "Selects", component: "selectsComponents" },
            { path: "/directivas", name: "Directivas", component: "directivasComponent" },
            { path: "/complexdirectives", name: "Complex", component: "complexDirectives" },
            { path: "/advenceddirectives", name: "Advanced", component: "advancedDirectives" },
            { path: "ejemplo", name: "Ejemplo", component: "ejemploComponent" },
            { path: "/contact", name: "Contact", component: "createContact" }

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