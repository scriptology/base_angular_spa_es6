'use strict';

function bobRouting($urlRouterProvider, $stateProvider) {
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('bob', {
            abstract: true,
            url: '/best_of_beauty',
            template: require('./views/layout.html'),
            resolve: {
                loadbobController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/bob.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        })

        .state('bob.home', {
            url: '',
            template: require('./views/index.html'),
            controller: 'bobController as vm',
            resolve: {
                loadNewsAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/bob.controller');
                            resolve(module.controller);
                        })
                    });
                }
            }
        })
}

export default angular
    .module('bob.routing', [])
    .config(bobRouting);
