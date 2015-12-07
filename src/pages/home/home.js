'use strict';

var css = require("./static/styles/home.sass");
//require("./static/images/logo.png");

export default angular
  .module('home', [
    require('./controllers/home.controller').name,
    require('./controllers/home.about.controller').name,
  ]);
