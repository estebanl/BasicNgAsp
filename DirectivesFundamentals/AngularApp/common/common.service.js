(function () {
    'use strict';

    angular.module('common', [
        'ngResource'
    ])
    .constant('appSettings', { serverPath: "api/Products/:search" });

})();