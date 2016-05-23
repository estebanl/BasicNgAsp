(function () {

    var module = angular.module('app');

    module.factory('serviceData', function ($http, $q) {

        function getAll() {
           return $http.get('http://localhost:49823/api/Values').then(function (data) {
                console.log(data);
                return data;
            }).catch(function (error) {
                return error;
            });
        };

        function getByType(tipo) {
            return $http.get('http://localhost:49823/api/Values/?tipo=' + tipo).then(function (data) {
                console.log(data);
                return data;
            }).catch(function (error) {
                return $q.reject(error);
            })
        };

        return {
            getAll: getAll,
            getByType:getByType
        }
    });

})();