'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {

  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('news', {
      url: '/news',
      template: require('./views/news.html'), // include small templates into routing configuration
      controller: 'NewsController as vm',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              // load whole module
              let module = require('./news');
              $ocLazyLoad.load({name: 'news'});
              resolve(module.controller);
            });
          });
        }
      }
    });
}

export default angular
  .module('news.routing', [])
  .config(homeRouting);
