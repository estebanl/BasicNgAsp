(function () {

    var module = angular.module('app');

    module.factory('ciudadesServicio', function ($http,$q) {

        function getAll() {
            return $http.get('http://localhost:49823/api/Values').then(function (data) {
                return data;
            }).catch(function (error) {
                return error;
            });
        };

        function getZona(subZona) {
            return $http.get('http://localhost:49823/api/Values/?tipo=' + subZona).then(function (data) {
                return data;
            }).catch(function (error) {
                return $q.reject(error);
            });
        }

        return {
            getAll: getAll,
            getZona:getZona
        };
    });

})();