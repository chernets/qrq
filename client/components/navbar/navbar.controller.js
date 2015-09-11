'use strict';

angular.module('qrqApp')
  .controller('NavbarCtrl', function ($scope) {
	  
	$scope.user = Parse.User.current();
	
	/*$scope.currentUser = function(){
		var currentUser = Parse.User.current();
		if (currentUser) {
			console.log(currentUser);
		} else {
			console.log("you not loggined");
		}
	}
	
	$scope.currentUser();*/
	
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    $scope.isCollapsed = true;
  });
