'use strict';

export default require('angular')
  .module('lazyApp', [
    require('angular-ui-router'),
    // @TODO: It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
    (() => { require('oclazyload'); return 'oc.lazyLoad' })(),

    // --- require commons  ---
    //require('commons/msg-store').name,

    // --- require global directives ---
    //require('./directives/globaltest/globaltest.directive').name,
    require('./directives/main_menu/mainmenu.directive').name,

    // --- require routings ---
    require('./pages/home/home.routing').name,
    require('./pages/messages/messages.routing').name,
    require('./pages/news/news.routing').name,
  ]);
