'use strict';

export default angular
  .module('articles', [
    require('./controllers/articles.controller').name,
  ]);
