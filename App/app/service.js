(function () {

    var module = angular.module('app');

    module.factory('crud', function ($http,$q) {

        function getAll() {
            return $http.get('http://localhost:49823/api/Clients')
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return error;
            })
        }

        function create(client) {
            return $http.post('http://localhost:49823/api/Clients', client)
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return $q.reject(error);
            })
        }

        function update(client) {
            return $http.put('http://localhost:49823/api/Clients/'+client.id, client)
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return $q.reject(error);
            })
        }

        function eliminar(client) {
            return $http.delete('http://localhost:49823/api/Clients/' + client.id)
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return $q.reject(error);
            })
        }

        return {
            getAll: getAll,
            create: create,
            update: update,
            eliminar: eliminar
        }

    })

})();