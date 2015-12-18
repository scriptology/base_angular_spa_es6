'use strict';


import angular from 'angular';

function ngTopPanel(httpService) {
  return {
    restrict: 'E',
    scope: true,
    template: require('./views/ng-top-panel.html'),
    link: (scope) => {

        // var Categories = $resource('http://ekorytov.newdev.allure.ru/api/articlecategories', {userId:'@id'});
        // Categories.get({}).$promise.then(function(data) {
        //     scope.categories = data;
        // });
        // 
        // httpService.get("http://newdev.allure.ru/api/articlecategories", {}).then(function(dataResponse) {
        //     console.log("dataResponse");
        //     console.log(dataResponse);
        //     scope.categories = dataResponse;
        // });
        //
        // scope.test = '1000';

    }
  }
}

ngTopPanel.$inject = ['httpService'];

export default angular
  .module('ng-top-panel.directive', [])
  .directive('ngTopPanel', ngTopPanel);
