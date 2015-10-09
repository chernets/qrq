'use strict';

angular.module('qrqApp')
  .controller('NavbarCtrl', function ($scope, $rootScope) {
	$scope.user = Parse.User.current();
	

  });
