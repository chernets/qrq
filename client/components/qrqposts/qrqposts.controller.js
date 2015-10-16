'use strict';

angular.module('qrqApp')
  .controller('qrqpostsCtrl', function($scope,$modal, $http) {
	  
	  
	var limit = $scope.newslimit;
	$scope.loadPosts = function(){
		var query = new Parse.Query("User_Posts");
		query.descending("createdAt");
		query.limit(limit);
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