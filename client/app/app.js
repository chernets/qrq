'use strict';
Parse.initialize("yAErXXQxCTY1ZL157EUEx8rGIbIVrJksDmt3oNai", "g0KpZi9CpCOqbCu8eVreaztICSnZNNRIe81vrZZK");
angular.module('qrqApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'wu.masonry',
  'geolocation',
  'uiGmapgoogle-maps',
  'ngFileUpload',
  'ngImgCrop',
  'ngMap',
  'FBAngular',
  'mb-adaptive-backgrounds',
  'angularMoment'
])
.run(function($rootScope,amMoment){
	$rootScope.menu = false;
    amMoment.changeLocale('ru');
})
.config(function($stateProvider, $urlRouterProvider, $locationProvider,adaptiveBackgroundsOptionsProvider) {
	$urlRouterProvider
	  .otherwise('/');
	$locationProvider.html5Mode(true);
	
	  adaptiveBackgroundsOptionsProvider.set({
		lightClass: 'adb-white',
		darkClass: 'adb-dark',
		imageClass: 'the-chosen-one'
	  });
});