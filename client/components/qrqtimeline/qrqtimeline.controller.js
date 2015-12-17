'use strict';

angular.module('qrqApp')
  .controller('qrqtimelineCtrl', function($scope, $http) {
	    
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};
	
	
	var limit = 20;
	$scope.loadPosts = function(){
		var query = new Parse.Query("User_Posts");
		query.descending("updatedAt");
		query.limit(limit);
		query.include("user_post_owner");		
		query.find({
			success: function(results) {
				$scope.$apply(function() {
					$scope.timeline_posts = results;
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	$scope.loadPosts();
	});