(function () {

    var module = angular.module('app');

    module.component('complexDirectives', {
        controllerAs: 'vm',
        templateUrl: 'app/complex.directives.component.html',
        controller: function () {
            var vm = this;
            vm.products = [
                { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
            ];
            vm.data = { name: "Esteban",
                        defaultCity: "London"};
            vm.city = "London";
            vm.getCity = function (name) {
                return name == "Esteban" ? vm.data.defaultCity : "Unknown";
            }
        }
    });

    module.directive('unorderedList', function () {
        return {
            link: link,
            restict: "EACM"
        }
        
        function link(scope, element, attrs) {
            var data = scope[attrs['unorderedList'] || attrs['listSource']];
            var propertyExpression = attrs["listProperty"] || "price | currency";
            if (angular.isArray(data)) {
                var listElem = angular.element("<ul>");

                if (element[0].nodeName == "#comment") {
                    element.parent().append(listElem);
                } else {
                    element.append(listElem);
                }
                for (var i = 0; i < data.length; i++) {
                    var itemElement = angular.element("<li>").text(scope.$eval(propertyExpression, data[i]));
                    listElem.append(itemElement);
                }
            }
        };
    });
    

    module.directive('unorderedListTemplate', function () {
        return {
            link: link,
            restict: "A",

            //template: "<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>"
            //templateUrl:"itemTemplate.html"
            /*template: function () {
                return angular.element(document.querySelector("#listTemplate")).html();
            }*/
            templateUrl: function (elem, attrs) {
                return attrs["template"] == "table" ? "app/tableTemplate.html" : "/app/itemTemplate.html"
            },
            replace: true,
        };

        function link(scope, element, attrs) {
            var data = scope.vm.products;
            scope.data = data;
            //  console.log(data);
        };
    });

    module.directive('scopeDemo', function () {
        return {
            template: function () {
                return angular.element(document.querySelector("#scopeTemplate")).html();
            },
            scope: {
                local: "@nameprop",
               // global: "=nameprop",
                cityFn:"&city"
            }
        }
    });
})();