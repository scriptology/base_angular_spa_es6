'use strict';

import angular from 'angular';

function ngTopPanel() {
  return {
    restrict: 'E',
    scope: true,
    template: require('./views/ng-top-panel.html'),
    link: (scope) => {

    }
  }
}


export default angular
  .module('ng-top-panel.directive', [])
  .directive('ngTopPanel', ngTopPanel);
