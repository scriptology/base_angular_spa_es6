'use strict';

function bpfRouting($urlRouterProvider, $stateProvider) {
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('bpf', {
            abstract: true,
            url: '/beauty_product_finder',
            template: require('./views/layout.html'),
            resolve: {
                loadBpfController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/bpf.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        })

        .state('bpf.home', {
            url: '',
            template: require('./views/index.html'),
            controller: 'BpfController as vm',
            resolve: {
                loadNewsAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/bpf.controller');
                            resolve(module.controller);
                        })
                    });
                }
            }
        })
}

export default angular
    .module('bpf.routing', [])
    .config(bpfRouting);
