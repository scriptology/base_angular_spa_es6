'use strict';

import angular from 'angular';

function globaltest() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<h1>Global directive! {{ localUser }}</div>',
    link: (scope) => {
        scope.localUser = "Petra";
    }
  }
}


export default angular
  .module('globaltest.directive', [])
  .directive('globaltest', globaltest);
