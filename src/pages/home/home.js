'use strict';

var css = require("./styles/home.sass");

export default angular
  .module('home', [
    require('./controllers/home.controller').name,
    require('./controllers/home.about.controller').name,
  ]);
