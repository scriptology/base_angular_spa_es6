'use strict';

require("./static/styles/menu-main.sass");

import angular from 'angular';

function ngMenuSidebar() {
  return {
    restrict: 'E',
    scope: true,
    template: require('./views/menu-sidebar.html'),
    link: (scope) => {
    }
  }
}


export default angular
  .module('ng-menu-sidebar.directive', [])
  .directive('ngMenuSidebar', mainMenu);
