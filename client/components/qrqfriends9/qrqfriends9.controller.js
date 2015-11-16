'use strict';

angular.module('qrqApp')
  .controller('qrqfriends9Ctrl', function ($scope, $rootScope,$state,$stateParams) {
	var user_page_me = Parse.User.current();
	var userpage_id;
	var folli;
	
	if($stateParams.id){
		console.log("no " + $stateParams.id);
		userpage_id = $stateParams.id;
	}else{
		
		userpage_id = user_page_me.id;
		console.log("yes " + user_page_me.id);
	}
	console.log(userpage_id);
	$scope.UserFriends = function(){
		var object = [];
		var query = new Parse.Query(Parse.User);
		query.equalTo("objectId", userpage_id);
		//query.limit(limit);
		query.find({
			success: function(results) {
				folli = results[0].get('followers');
				if(folli){
						for (var i = 0; i < folli.length; i++) {
						  object.push(folli[i]);

						}
					var queryz = new Parse.Query(Parse.User);
						queryz.containedIn("objectId", object);
							queryz.find({
							  success: function(results_info) {
								$scope.$apply(function() {
									$scope.qrqfriends9 = results_info;
								});
							  }
							});
					}else{
					}
			
			},
			error: function(error) {
				console.log(error);
			}
		});


	}
	
	$scope.UserFriends();

  });
