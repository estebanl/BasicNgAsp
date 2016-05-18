(function () {
    var module = angular.module('app');

    var user = function () {
        return {
            usernmae: "",
            email: "",
            website: "",
            phone: "",
            birthdate: "",
            age: "",
            feelLike: "",
            color: "",
            cuisine: "",
            bio: "",
            terms: "",
            status: "",
            rating: 1
        };
    };

    module.factory("user", user);
})