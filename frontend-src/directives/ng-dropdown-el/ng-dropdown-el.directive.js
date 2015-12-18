'use strict';

import angular from 'angular';
// var path = require('path');

function ngDropdownEl($compile) {
    return {
        restrict: 'A',
        scope: true,
        link: (scope, element, attrs) => {

            var modalViewsRoot = "./views/";
            var params = {};

            if(attrs.params) {
                var p = attrs.params;
                params = JSON.parse(p.replace(/\'/g, '"'));
            }

            scope.stopPropagation = function(event) {
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }

            scope.closeModal = function(event) {
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                console.log("closeModal");
                $(document).find(".js-modal").remove();
            };

            $(element).on("hover", function(event) {

                if (event) {
                    event.preventDefault();
                }

                scope.$apply(function(){

                    var template = require(modalViewsRoot + "ng-dropdown-el.html");

                    var modalElement = angular.element(template);

                    element.append(modalElement)
                    $compile(modalElement)(scope);

                });
            });
        }
    }
}

ngDropdownEl.$inject = ['$compile'];

export default angular
    .module('ng-dropdown-el.directive', [])
    .directive('ngModal', ngDropdownEl);
