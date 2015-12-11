'use strict';

// require importer sass
require('./static/styles/importer.sass');
window.$ = require("jquery");

export default require('angular')
    .module('lazyApp', [
        require('angular-ui-router'),
        // @TODO: It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
        (() => {
            require('oclazyload');
            return 'oc.lazyLoad'
        })(),

        // --- require commons  ---
        //require('commons/msg-store').name,

        // --- require global directives ---
        //require('./directives/globaltest/globaltest.directive').name,
        require('./directives/ng-menu-main/ng-menu-main.directive').name,
        require('./directives/ng-top-panel/ng-top-panel.directive').name,
        require('./directives/ng-bottom/ng-bottom.directive').name,
        require('./directives/ng-modal/ng-modal.directive').name,

        // --- require routings ---
        require('./pages/home/home.routing').name,
        require('./pages/messages/messages.routing').name,
        require('./pages/news/news.routing').name,

        // --- require controllers ---
        require('./pages/news/news').name

    ]);
