(function () {
    'use strict';

    var module = angular
          .module('app');

    module.component('productsComponent', {
        templateUrl: "/AngularApp/productsComponent.html",
        controllerAs: "vm",
        controller: function (productResource) {
            var vm = this;

            vm.searchCriteria = "GDN";

            // productResource.query({search: vm.searchCriteria},function (data) {
             productResource.query({$skip:1, $top:3},function(data){
            //   productResource.query({$filter:"contains(ProductCode, 'GDN') and Price ge 5 and Price le 20" }, function (data) {
            //productResource.query({ $search: "GDN" }, function (data) {
                vm.products = data;
                console.log(data);
            })
        }
    })

})();