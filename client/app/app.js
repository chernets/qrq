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
  'ngMap'
])
.run(function($rootScope){
	$rootScope.menu = false;
})
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider
	  .otherwise('/');
	$locationProvider.html5Mode(true);
});
