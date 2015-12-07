'use strict';

import angular from 'angular';

function mainMenu() {
  return {
    restrict: 'E',
    scope: true,
    template: require('./views/mainmenu.html'),
    link: (scope) => {
    }
  }
}


export default angular
  .module('ng-menu-main.directive', [])
  .directive('ngMenuMain', mainMenu);
