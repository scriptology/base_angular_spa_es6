'use strict';

import angular from 'angular';

function globaltest() {
  return {
    restrict: 'EA',
    scope: true,
    template: require("./views/bottom-base.html"),
    link: (scope) => {
        scope.test = "bottom";
    }
  }
}


export default angular
  .module('ng-bottom.directive', [])
  .directive('ngBottom', globaltest);
