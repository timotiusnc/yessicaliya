"use strict";angular.module("yessicaliyaApp",["ui.router","ui.bootstrap"]).constant("$",window.$).constant("YSL_TITLE"," | Yessica & Liya Wedding").constant("MAX_SLIDES",7).constant("MAX_GALLERIES",30).config(["$stateProvider","$urlRouterProvider","YSL_TITLE",function(a,b,c){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/home.html",controller:"HomeCtrl",data:{pageTitle:"Yessica & Liya Wedding"}}).state("invitation",{url:"/invitation",templateUrl:"views/invitation.html",data:{pageTitle:"Invitation"+c}}).state("story",{url:"/story",templateUrl:"views/story.html",data:{pageTitle:"Our Story"+c}}).state("transportation",{url:"/transportation",templateUrl:"views/transportation.html",data:{pageTitle:"Transportation"+c}}).state("accomodation",{url:"/accomodation",templateUrl:"views/accomodation.html",data:{pageTitle:"Accomodation"+c}}).state("location",{url:"/location",templateUrl:"views/location.html",data:{pageTitle:"Location"+c}}).state("gallery",{url:"/gallery",controller:"GalleryCtrl",templateUrl:"views/gallery.html",data:{pageTitle:"Gallery"+c}})}]).run(["$rootScope",function(a){a.$on("$stateChangeStart",function(b,c){a.state=c})}]),angular.module("yessicaliyaApp").controller("HomeCtrl",["$scope","MAX_SLIDES",function(a,b){a.slides=[];for(var c=1;b>=c;++c)a.slides.push(c)}]),angular.module("yessicaliyaApp").controller("GalleryCtrl",["$scope",function(){}]),angular.module("yessicaliyaApp").directive("yslMenu",["$",function(a){return{templateUrl:"scripts/directives/ysl-menu.html",restrict:"E",link:function(){a(".navbar a:not(.dropdown-toggle)").on("click",function(){var b=a(window).width();768>=b&&a(".navbar-toggle").click()})}}}]),angular.module("yessicaliyaApp").directive("yslOrnament",["$",function(){return{templateUrl:"scripts/directives/ysl-ornament.html",restrict:"E",link:function(){}}}]),angular.module("yessicaliyaApp").directive("yslThemeChanger",["$",function(){return{templateUrl:"scripts/directives/ysl-theme-changer.html",restrict:"E",controller:"llvThemeChangerCtrl",link:function(){}}}]).controller("llvThemeChangerCtrl",["$scope",function(a){a.isActive=!1,a.bgColor="pink",a.toggleThemeChanger=function(){a.isActive=!a.isActive}}]);