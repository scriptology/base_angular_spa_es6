'use strict';

var css = require("./styles/news.css");

export default angular
  .module('news', [
    require('./controllers/news.controller').name,
    require('./directives/my.directive').name,
  ]);
