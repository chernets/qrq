'use strict';

angular.module('qrqApp')
  .controller('qrqpostsCtrl', function($scope, $http,$state,$stateParams) {
	  
	var user_page_me = Parse.User.current();
	var limit = $scope.newslimit;
	var qrquserposts;
	
	if($stateParams.id){
		qrquserposts = $stateParams.id;
	}
	$scope.message = {
   text: 'hello world!',
   time: new Date()
};
	$scope.loadPosts = function(){
		var query = new Parse.Query("User_Posts");
		query.descending("updatedAt");
		query.limit(limit);
		query.include("user_post_owner");

		if(qrquserposts){
			query.equalTo("user_post_owner", {
				__type: "Pointer",
				className: "_User",
				objectId: qrquserposts
			});
		}
		
		
		query.find({
			success: function(results) {
				$scope.$apply(function() {
					$scope.user_posts = results;
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	$scope.loadPosts();

	});