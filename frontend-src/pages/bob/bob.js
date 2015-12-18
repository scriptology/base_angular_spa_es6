'use strict';

//var css = require("./static/styles/home.sass");
//require("./static/images/logo.png");

export default angular
  .module('bob', [
    require('./controllers/bob.controller').name
  ]);
