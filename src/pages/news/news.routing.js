'use strict';

function messagesRouting($urlRouterProvider, $stateProvider) {
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('news', {
            abstract: true,
            url: '/news',
            template: require('./views/layout.html'),
            resolve: {
                loadNewsAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/news.all.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        })

        .state('news.list', {
            url: '',
            template: require('./views/news.all.html'),
            controller: 'NewsAllController as vm',
            resolve: {
                loadNewsAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/news.all.controller');
                            $ocLazyLoad.load({
                                dataDetail: module.dataDetail
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        })

        .state('news.list.detail', {
            url: '/:id',
            templateProvider: ($q) => {
                return $q((resolve) => {
                    require.ensure([], () => resolve(require('./views/news.detail.html')));
                });
            },
            controller: 'NewsDetailController as vm',
            resolve: {
                loadNewsDetailController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/news.detail.controller');
                            $ocLazyLoad.load({
                                dataDetail: module.dataDetail
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        });
}

export default angular
    .module('news.routing', [])
    .config(messagesRouting);
