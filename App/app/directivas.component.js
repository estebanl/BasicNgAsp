(function () {

    var module = angular.module('app');

    module.component('directivasComponent', {
        templateUrl: "app/directivas.component.html",
        controllerAs: "vm",
        controller: function () {
            var vm = this;
            vm.products = [
                { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                { name: "Oranges", category: "Fruit", price: 2.02, expiry: 6 }
            ];

            vm.names = ["Apples", "Bananas", "Oranges"];

            vm.incrementPrices = function () {
                for (var i = 0; i < vm.products.length; i++) {
                    vm.products[i].price++;
                }
            };
        }
    });

    module.directive("unorderedList", function ($parse) {
        return function (scope, element, attrs) {
            //console.log(attrs);
            var data = attrs["unorderedList"];
            var propertyExpression = attrs["listProperty"];

            // var value = $parse(data)(scope);
            // console.log(value);
            var value = scope.vm.products;
            //console.log(scope.vm.products);

            if (angular.isArray(value)) {
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i = 0; i < value.length; i++) {
                    (function () {
                        var itemElement = angular.element('<li>');
                        listElem.append(itemElement);
                        var index = i;
                        var watcherFn = function (watchScope) {
                            return watchScope.$eval(propertyExpression, value[index]);
                        }
                        scope.$watch(watcherFn, function (newValue, oldValue) {
                            itemElement.text(newValue);
                        });
                    }());
                }
            }
        }
    });

    module.directive('demoDirective', function () {
        return function (scope, element, attrs) {
           // console.log(element);
            //var items = element.children();

            console.log(element.html());

            var listElem = angular.element("<ol>");
            element.append(listElem);
            for (var i = 0; i < scope.vm.names.length; i++) {
                listElem.append(angular.element("<li>").append(angular.element("<span>").text(scope.vm.names[i])));
            }

            var buttons = element.find("button");
            buttons.on("click", function (e) {
                element.find("li").toggleClass("bold");
            });

           /* element.wrap('<div class="danger"></div>')
            var items = element.find("li");
            items.css("color", "red");
            for (var i = 0; i < items.length; i++) {
                if (items.eq(i).text() == "Oranges") {
                    items.eq(i).css("font-weight", "bold");
                } else {
                    items.eq(i).css("font-weight", "normal");
                }
            }*/
        };
    });

    module.directive('formClases', function () {
        return function (scope, element, attrs) {
            var label = element.find('label');
            var input = element.find('input');
            var select = element.find('select');
            var divs = element.find('div');
            for (var i = 0; i < divs.length; i++) {
                if (!angular.isUndefined(divs[i].attributes.fg)) {
                    angular.element(divs[i]).addClass('form-froup');
                }
            }
            label.addClass('label-control');
            input.addClass('form-control');
            select.addClass('form-control');
        };
    });

})();