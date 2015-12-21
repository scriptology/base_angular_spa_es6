'use strict';

import angular from 'angular';

function ngModal($compile) {
    return {
        restrict: 'EA',
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
                    event.stopPropagation();
                }
            }

            scope.closeModal = function(event) {
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                $(document).find(".js-modal").remove();
            };

            $(element).on("click", function(event) {
                if (event) {
                    event.preventDefault();
                }

                scope.$apply(function(){

                    var template = require(modalViewsRoot + params.template);

                    var modalElement = angular.element(template);

                    element.append(modalElement)
                    $compile(modalElement)(scope);

                    //$('body').addClass('-overflow');


                });
            });
        }
    }
}

ngModal.$inject = ['$compile'];

export default angular
    .module('ng-modal.directive', [])
    .directive('ngModal', ngModal);
