(function () {
    'use strict';

    angular
        .module('common')
        .factory('productResource', productResource);

    productResource.$inject = ['$resource','appSettings'];

    function productResource($resource, appSettings) {

        return $resource(appSettings.serverPath);
    }
})();