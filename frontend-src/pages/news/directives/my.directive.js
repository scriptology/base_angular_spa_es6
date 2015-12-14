'use strict';

import angular from 'angular';

function greeting() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<h1>Hello, Directive! {{ localUser }}</div>',
    link: (scope) => {
        scope.localUser = "Petra";
    }
  }
}

// class Greeting {
//     /*@ngInject*/
//     constructor($interval) {
//         this.template = '<div>I\'m a directive!</div>';
//         this.restrict = 'E';
//         this.scope = {}
//
//     }
//
//     // optional compile function
//     compile(tElement) {
//         tElement.css('position', 'absolute');
//     }
//
//     // optional link function
//     link(scope, element) {
//         this.$interval(() => this.move(element), 1000);
//     }
// }

export default angular
  .module('my.directive', [])
  .directive('greeting', greeting);
