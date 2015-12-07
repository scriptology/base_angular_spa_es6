'use strict';

var css = require("./styles/news.sass");

export default angular
  .module('news', [
    require('./controllers/news.controller').name,
    require('./directives/my.directive').name,
  ]);
