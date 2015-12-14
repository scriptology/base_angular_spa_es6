'use strict';

function homeRouting($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./views/home.html'), // include small templates into routing configuration
      controller: 'HomeController as vm',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              // load whole module
              let module = require('./home');
              $ocLazyLoad.load({name: 'home'});
              resolve(module.controller);
            });
          });
        }
      }
    }).state('home.about', {
      url: '/about',
      template: require('./views/home.about.html'),
      controller: 'HomeAboutController as vm',
    });
}

export default angular
  .module('home.routing', [])
  .config(homeRouting);
