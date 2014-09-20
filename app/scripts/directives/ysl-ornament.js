'use strict';

/**
 * @ngdoc directive
 * @name yessicaliyaApp.directive:yslOrnament
 * @description
 * # yslOrnament
 */
angular.module('yessicaliyaApp')
  .directive('yslOrnament', function ($) {
    return {
      templateUrl: 'scripts/directives/ysl-ornament.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
