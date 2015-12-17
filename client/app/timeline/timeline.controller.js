'use strict';

angular.module('qrqApp')
  .controller('TimelineCtrl', function($scope, $http) {
	  
	  
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce');
	};
	  
		$scope.timeline_massive = [];
		var skipi = 0;
		
		$scope.loadPosts = function(i){

		var query = new Parse.Query("User_Posts");
		query.descending("createdAt");
		query.limit(20);
		query.include("user_post_owner");		
		query.find({
			success: function(results) {
				for (var i = 0; i < results.length; i++) {
						$scope.timeline_massive.push(results[i]); 
				}
			},
			error: function(error) {
				console.log(error);
			}
		});
		
		/*
		var query = new Parse.Query("User");
		query.descending("createdAt");
		query.limit(10);
		//query.include("user_post_owner");		
		query.find({
			success: function(results) {
				for (var i = 0; i < results.length; i++) {
					$scope.$apply(function() {
						$scope.timeline_massive.push(results[i]); 
					});
				}
			},
			error: function(error) {
				console.log(error);
			}
		});
		*/
		
		
		var queryn = new Parse.Query("news");
		queryn.descending("createdAt");
		queryn.limit(20);
		//query.include("user_post_owner");		
		queryn.find({
			success: function(results) {
				for (var i = 0; i < results.length; i++) {
						$scope.timeline_massive.push(results[i]);
				}
			},
			error: function(error) {
				console.log(error);
			}
		});
	}
	$scope.loadPosts();
  });
