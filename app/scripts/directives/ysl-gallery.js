'use strict';

/**
 * @ngdoc directive
 * @name yessicaliyaApp.directive:yslMenu
 * @description
 * # yslMenu
 */
angular.module('yessicaliyaApp')
  .directive('yslGallery', function ($, $timeout) {
    return {
      templateUrl: 'scripts/directives/ysl-gallery.html',
      restrict: 'E',
      scope: {
        images: '=',
        thumbnails: '='
      },
      link: function postLink(scope, element, attrs) {
        var owl = $("#ysl-carousel");
        var owlThumb = $("#ysl-carousel-thumbnail");

        $timeout(function() {
          owl.owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 500,
            singleItem: true,
            lazyLoad : true,
            autoPlay: 2000,
            pagination: false
            //afterInit: afterOWLinit // do some work after OWL init
          });

          owlThumb.owlCarousel({
            slideSpeed: 500,
            lazyLoad : true,
            items: 10,
            itemsDesktop : [1199,8],
            itemsDesktopSmall : [980,6],
            itemsTablet: [768,4],
            itemsTabletSmall: false,
            itemsMobile : [479,3],
            autoPlay: 2000,
            pagination: false
          });

          owl.find('a').click(function(e) {
            e.preventDefault();
            return false;
          });
        });

        scope.owlGoTo = function(idx) {
          owl.trigger('owl.goTo', idx);
        };
        
        function getThumbnail(idx) {
          return 'images/gallery/gallery_sm_' + (++idx) + '.jpg';
        };

        function afterOWLinit() {
          // adding A to div.owl-page
          $('.owl-controls .owl-page').append('<a class="item-link" href="#"/>');

          var pafinatorsLink = $('.owl-controls .item-link');

          /**
           * this.owl.userItems - it's your HTML <div class="item"><img src="http://www.ow...t of us"></div>
           */
          $.each(this.owl.userItems, function (i) {
            $(pafinatorsLink[i])
                // i - counter
                // Give some styles and set background image for pagination item
                .css({
                  'background': 'url(' + getThumbnail($(this).find('img').attr('data-id')) + ') center center no-repeat',
                  '-webkit-background-size': 'cover',
                  '-moz-background-size': 'cover',
                  '-o-background-size': 'cover',
                  'background-size': 'cover'
                })
                // set Custom Event for pagination item
                .click(function () {
                  owl.trigger('owl.goTo', i);
                });
          });

          // add Custom PREV NEXT controls
          //$('.owl-pagination').prepend('<a href="#prev" class="prev-owl"><i class="fa fa-chevron-left"></i></a>');
          //$('.owl-pagination').append('<a href="#next" class="next-owl"><i class="fa fa-chevron-right"></i></a>');

          // set Custom event for NEXT custom control
          $(".next-owl").click(function () {
              owl.trigger('owl.next');
          });

          // set Custom event for PREV custom control
          $(".prev-owl").click(function () {
              owl.trigger('owl.prev');
          });
        }
      }
    };
  });
