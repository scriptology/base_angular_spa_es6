'use strict';

export default angular
  .module('news', [
    require('./controllers/news.controller').name,
    require('./controllers/news.all.controller').name,
    require('./controllers/news.detail.controller').name,
  ]);
