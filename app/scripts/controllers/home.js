'use strict';

/**
 * @ngdoc function
 * @name yessicaliyaApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yessicaliyaApp
 */
angular.module('yessicaliyaApp')
  .controller('HomeCtrl', function ($scope, MAX_SLIDES) {
    $scope.slides = [];
    for(var i=1; i<=MAX_SLIDES; ++i) {
      $scope.slides.push(i);
    }
  });
