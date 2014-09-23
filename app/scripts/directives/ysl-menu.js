'use strict';

/**
 * @ngdoc directive
 * @name yessicaliyaApp.directive:yslMenu
 * @description
 * # yslMenu
 */
angular.module('yessicaliyaApp')
  .directive('yslMenu', function ($) {
    return {
      templateUrl: 'scripts/directives/ysl-menu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        $('.navbar a:not(.dropdown-toggle)').on('click', function() {
          var width = $(window).width();
          if (width <= 768) {
            $('.navbar-toggle').click();
          }
        });
      }
    };
  });
