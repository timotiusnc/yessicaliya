'use strict';

/**
 * @ngdoc overview
 * @name yessicaliyaApp
 * @description
 * # yessicaliyaApp
 *
 * Main module of the application.
 */
angular
  .module('yessicaliyaApp', [
    //'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'angulartics',
    'angulartics.google.analytics',
    'angular-loading-bar',
  ])
  .constant('$', window.$)
  .constant('YSL_TITLE', ' | Yessica & Liya Wedding')
  .constant('MAX_SLIDES', 7)
  .constant('MAX_GALLERIES', 30)
  .config(function($stateProvider, $urlRouterProvider, YSL_TITLE) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        data: {pageTitle: 'Yessica & Liya Wedding'}
      })
      .state('invitation', {
        url: '/invitation',
        templateUrl: 'views/invitation.html',
        data: {pageTitle: 'Invitation' + YSL_TITLE}
      })
      .state('story', {
        url: '/story',
        templateUrl: 'views/story.html',
        data: {pageTitle: 'Our Story' + YSL_TITLE}
      })
      .state('transportation', {
        url: '/transportation',
        templateUrl: 'views/transportation.html',
        data: {pageTitle: 'Transportation' + YSL_TITLE}
      })
      .state('accomodation', {
        url: '/accomodation',
        templateUrl: 'views/accomodation.html',
        data: {pageTitle: 'Accomodation' + YSL_TITLE}
      })
      .state('location', {
        url: '/location',
        templateUrl: 'views/location.html',
        data: {pageTitle: 'Location' + YSL_TITLE }
      })
      .state('gallery', {
        url: '/gallery',
        controller: 'GalleryCtrl',
        templateUrl: 'views/gallery.html',
        data: {pageTitle: 'Gallery' + YSL_TITLE}
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, toState) {
      $rootScope.state = toState;
    });
  });
