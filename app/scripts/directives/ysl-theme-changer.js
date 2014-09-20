'use strict';

/**
 * @ngdoc directive
 * @name yessicaliyaApp.directive:yslThemeChanger
 * @description
 * # yslThemeChanger
 */
angular.module('yessicaliyaApp')
  .directive('yslThemeChanger', function ($) {
    return {
      templateUrl: 'scripts/directives/ysl-theme-changer.html',
      restrict: 'E',
      controller: 'llvThemeChangerCtrl',
      link: function postLink(scope, element, attrs) {
      }
    };
  })
  .controller('llvThemeChangerCtrl', function($scope) {
    $scope.isActive = false;
    $scope.bgColor = 'pink'; //default
    $scope.toggleThemeChanger = function() {
      $scope.isActive = !$scope.isActive;
    };
  });
