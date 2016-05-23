(function () {

    var module = angular.module('app');

    module.component('advancedDirectives', {
        templateUrl: 'app/advanced.directives.component.html',
        controllerAs: 'vm',
        controller: function ($sce,$uibModal) {
            var vm = this;
            vm.dataSource = "controller";
            vm.products = [
                { name: "Bananas", price: 2.42 , quantity: 2},
                { name: "Apples", price: 1.20, quantity: 3 },
                { name: "Pears", price: 2.02 , quantity: 1}
            ];
            vm.changeData = function () {
                vm.products.push({ name: "Cherries", price: 4.02, quantity: 1 });
                for (var i = 0; i < vm.products.length; i++) {
                    vm.products[i].price++;
                }
            };

            vm.dataValue = "Yes";
            var popoverTemplate = angular.element(document.querySelectorAll("#popoverTemplate")).html();
            vm.htmlPopover = $sce.trustAsHtml(popoverTemplate);//'<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');

            vm.open = function (size) {
                var modalInstance = $uibModal.open({
                    templateUrl: "modalTemplate.html",
                    controllerAs:"vm",
                    controller: function ($scope,$uibModalInstance) {
                        var vm = this;
                        vm.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        }
                    }
                });
            }

            vm.format = 'dd-MMMM-yyyy';
            vm.dt = null;
            vm.popup1 = {
                opened: false
            };
            vm.dateOptions = {
               // dateDisabled: disabled,
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
            function disabled(data) {
                var date = data.date,
                  mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            };
            vm.altInputFormats = ['M!/d!/yyyy'];
            vm.open1 = function () {
                vm.popup1.opened = true;
            }
        }
    });

    module.directive('panel', function () {
        return {
            link: function (scope, element, attrs) {
                scope.dataSource = "directive";
            },
            restrict: "E",
            //scope: false,
            scope: true,
            template: function () {
                return angular.element(document.querySelector("#templateAdvanced")).html();
            },
            transclude: true
        }
    });

    module.directive('simpleRepeater', function () {
        return {
            scope: {
                data: "=source",
                propName: "@itemName"
            },
            transclude: "element",

            compile: function (element, attrs, transcludeFn) {
                return function ($scope, $element, $attrs) {
                    $scope.$watch("data.length", function () {
                        var parent = $element.parent();

                        parent.children().remove();
                        for (var i = 0; i < $scope.data.length; i++) {
                            var childScope = $scope.$new();
                            childScope[$scope.propName] = $scope.data[i];
                            transcludeFn(childScope, function (clone) {
                                parent.append(clone);
                            });
                        }
                    });
                };
            }
        };
    });

    module.directive("productItem", function () {
        return {
            template: document.querySelector("#productTemplate").outerText,
            require: "^productTable",
            link: function (scope, element, attrs, ctrl) {
                scope.$watch("item.quantity", function () {
                    ctrl.updateTotal();
                });
            }
        }
    });

    module.directive("productTable", function () {
        return {
            transclude: true,
            scope: {
                value: "=productTable",
                data: "=productData"
            },
            controller: function ($scope, $element, $attrs) {
                this.updateTotal = function () {
                    var total = 0;
                    for (var i = 0; i < $scope.data.length; i++) {
                        total += Number($scope.data[i].quantity);
                    }
                    $scope.value = total;
                }
            }
        }
    });

    module.directive("resetTotals", function () {
        return {
            scope: {
                data: "=productData",
                propname: "@propertyName"
            },
            template: document.querySelector("#resetTemplate").outerText,
            require: "^productTable",
            link: function (scope, element, attrs, ctrl) {
                scope.reset = function () {
                    for (var i = 0; i < scope.data.length; i++) {
                        scope.data[i][scope.propname] = 0;
                    }
                    ctrl.updateTotal();
                }
            }
        }
    });

    module.directive("triButton", function () {
        return {
            restrict: "E",
            replace: true,
            require: "ngModel",
            template: document.querySelector("#triTemplate").outerText,
            link: function (scope, element, attrs, ctrl) {

                var validateParser = function (value) {
                    var valid = value != "Not Sure" //(value == "Yes" || value == "No");
                    ctrl.$setValidity("confidence", valid);
                    return valid ? value : undefined;
                };

                ctrl.$parsers.push(validateParser);

                ctrl.$formatters.push(function (value) {
                    return value == "Huh?" ? "Not Sure" : value;
                });

                element.on("click", function (event) {
                    setSelected(event.target.innerText);
                    scope.$apply(function () {
                        ctrl.$setViewValue(event.target.innerText);
                    });
                });

                var setSelected = function (value) {
                    var buttons = element.find("button");
                    buttons.removeClass('btn-primary');
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons.eq(i).text() == value) {
                            buttons.eq(i).addClass("btn-primary");
                        }
                    }
                }
                ctrl.$render = function () {
                    validateParser(ctrl.$viewValue);
                    setSelected(ctrl.$viewValue || "Yes");
                }
            }
        }
    });
})();