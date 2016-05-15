(function () {

    var module = angular.module('app');

    module.component('videoComponent', {
        templateUrl: '/AngularApp/videoComponent.html',
        controllerAs: "vm",
        controller: function () {
            var vm = this;
            vm.messages = [];
            vm.handlePause = function (evt) {
                console.log(evt);
                vm.messages.push({ text: 'paused!' });
                console.log("Pause");
            }

            vm.data = { message: "I have not been clicked" };
            vm.clickHandler = function (data) {
                data.message = "I have been clicked";
            }
        }
    });

    module.directive('eventPause', function ($parse) {
        return {
            restrict: 'A',
            /*scope: {
                eventPause: '&'
            },*/
            link: function (scope, el, attrs) {
                var fn = $parse(attrs['eventPause']);
                el.on('pause', function (event) {
                    scope.$apply(function () {
                        // scope.eventPause();
                        fn(scope, { evt: event })
                    })
                })
            }
        }
    });

    module.directive("spacebarSupport", function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                $('body').on('keypress', function (evt) {
                    var vidEl = el[0];
                    if (evt.keyCode === 32) {
                        if (vidEl.paused) {
                            vidEl.play();
                        } else {
                            vidEl.pause();
                        }
                    }
                })
            }
        }
    });

    module.directive("myClick", function ($parse) {
        return {
            link: function (scope, el, attrs) {
                var fn = $parse(attrs['myClick']);
                el.on('click', function () {
                    scope.$apply(function () {
                        fn(scope);
                    })
                })
            }
        }
    });

})();