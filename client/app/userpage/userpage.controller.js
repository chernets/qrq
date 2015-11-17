'use strict';

angular.module('qrqApp')
  .controller('userpageCtrl', function($scope, $http,$rootScope,$state,$stateParams) {
	$rootScope.menu = "userpage";
	  $state.params;
	  $stateParams; 
	  var userpage_id;
	  
	  var user_page_me_now = Parse.User.current();
	if($stateParams.id){
		userpage_id = $stateParams.id;
		var query = new Parse.Query(Parse.User);
			query.get(userpage_id, {
				success: function(user_page_friend) {
					$scope.$apply(function() {
						$scope.user_pade_ids = user_page_friend;
					});
				}
			});
	}else{
		$scope.user_pade_ids = user_page_me_now;
	}

		


  });
