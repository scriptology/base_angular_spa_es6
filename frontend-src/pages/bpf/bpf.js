'use strict';

//var css = require("./static/styles/home.sass");
//require("./static/images/logo.png");

export default angular
  .module('bpf', [
    require('./controllers/bpf.controller').name
  ]);
