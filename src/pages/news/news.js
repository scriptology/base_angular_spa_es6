'use strict';

export default angular
  .module('news', [
    require('./controllers/news.controller').name,
    require('./directives/my.directive').name,
  ]);
