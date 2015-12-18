'use strict';

function articlesRouting($urlRouterProvider, $stateProvider) {
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('articles', {
            abstract: true,
            url: '/articles',
            template: require('./views/layout.html'),
            resolve: {
                loadArticlesAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/articles.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        })

        .state('articles.list', {
            url: '/:category',
            template: require('./views/articles.all.html'),
            controller: 'ArticlesAllController as vm',
            resolve: {
                loadArticlesAllController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/articles.list.controller');
                            $ocLazyLoad.load({
                                dataDetail: module.dataDetail
                            });
                            resolve(module.controller);
                        })
                    });
                }
            }
        })

        .state('articles.list.detail', {
            url: '/:category/:id',
            templateProvider: ($q) => {
                return $q((resolve) => {
                    require.ensure([], () => resolve(require('./views/articles.detail.html')));
                });
            },
            controller: 'ArticlesDetailController as vm',
            resolve: {
                loadArticlesDetailController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load only controller module
                            let module = require('./controllers/articles.detail.controller');
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
    .module('articles.routing', [])
    .config(articlesRouting);
