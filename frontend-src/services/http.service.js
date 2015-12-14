'use strict';

import angular from 'angular';

function httpService($http) {
    var httpService = {

        get: function(url, data) {
            console.log("get");
            var promise = $http.get(url, {
                params: data
            }).then(function(response) {
                //console.log("get: response success");
                var dataResponse = response.data;
                return dataResponse.data;

            }, function error(response) {
                //console.log("get: response error");
                if (response.status === 400) {
                    scope["validationErrors"] = response.data.errors.children;
                }
                if (response.status === 401) {
                    //$state.go("login");
                }
                if (response.status === 500) {

                }

                if (scope) {
                    scope.loading = false;
                }
                return false;
            });

            return promise;
        },

        post: function(url, data, scope) {
            console.log("post");
        },

        patch: function(url, data, scope) {
            console.log("patch");
        }
    };

    return httpService;
}

httpService.$inject = ['$http'];

export default angular
    .module('http.service', [])
    .factory('httpService', httpService);
