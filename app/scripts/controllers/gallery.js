'use strict';

/**
 * @ngdoc function
 * @name yessicaliyaApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the yessicaliyaApp
 */
angular.module('yessicaliyaApp')
  .controller('GalleryCtrl', function ($scope, MAX_GALLERIES) {
    $scope.images =  [];
    for(var i=1; i<=MAX_GALLERIES; ++i) {
      $scope.images.push({
        url: 'images/gallery/gallery_' + i + '.jpg'
      });
    }
  });
